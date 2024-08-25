const router = require("express").Router();
const {
  getFriends,
  messageUploadDB,
  messageGet,
  ImageMessageSend,
} = require("../controller/messengerController");
const authMiddleware = require("../middleware/authMiddleWare");

router.get("/get-friends", authMiddleware, getFriends);
router.get("/get-message/:id", authMiddleware, messageGet);
router.post("/send-message", authMiddleware, messageUploadDB);
router.post("/image-message-send", authMiddleware, ImageMessageSend);

module.exports = router;
