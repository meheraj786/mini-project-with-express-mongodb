const express = require("express");
const {
  createUser,
  loginUser,
  logout,
  profile,
} = require("../../controllers/userControllers");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");
const router = express.Router();

router.post("/createuser", createUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.get("/profile", isLoggedIn, profile);

module.exports = router;
