const express = require("express");
const connectDB = require("./db.js");
const cors = require("cors");
const http = require("http");
const { initSocket } = require("./socket/index.js");
const app = express();
app.use(cors({ origin:"*"}));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
const dotenv = require('dotenv');
dotenv.config();

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/auth", require("./Routes/auth_routes.js"));
app.use("/user", require("./Routes/userRoutes.js"));
app.use("/message", require("./Routes/message_routes.js"));
app.use("/conversation", require("./Routes/conversation_routes.js"));

// Server setup
const server = http.createServer(app);

// Socket.io setup
initSocket(server); // Initialize socket.io logic

// Start server and connect to database
server.listen(process.env.PORT, () => {
  console.log(`🚀 Server started at http://localhost:${process.env.PORT}`); 
  connectDB();
});
