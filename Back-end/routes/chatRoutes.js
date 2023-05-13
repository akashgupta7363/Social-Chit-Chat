const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  addToGroup,
  removeGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const router = express.Router();

router.route("/").get(protect, fetchChats).post(protect, accessChat);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeGroup);
router.route("/addgroup").put(protect, addToGroup);
module.exports = router;
