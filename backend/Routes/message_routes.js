const express = require("express");
const router = express.Router();

const {
  sendMessage,
  allMessage,
  deletemesage,
} = require("../Controllers/message_controller.js");
const fetchuser = require("../middleware/fetchUser.js");

router.get("/:id/:userid", fetchuser, allMessage);
router.post("/send", fetchuser, sendMessage);
router.post("/delete", fetchuser, deletemesage);

module.exports = router;
