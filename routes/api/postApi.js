const express = require("express");
const {
  createUser,
  loginUser,
  logout,
  profile,
} = require("../../controllers/userControllers");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");
const { createPost, getAllPost, editPost } = require("../../controllers/postController");
const router = express.Router();

router.post("/createpost", isLoggedIn, createPost)
router.get("/allposts", getAllPost)
router.patch("/post/:id", editPost)


module.exports = router;