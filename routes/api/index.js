const express = require("express");
const { createUser } = require("../../controllers/userControllers");
const router = express.Router();
const userApi=require("./userApi")
const postApi=require("./postApi")
const likeApi=require("./likesApi")

router.use("/user", userApi);
router.use("/post", postApi);
router.use("/like", likeApi);

module.exports = router;
