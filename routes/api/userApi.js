const express = require("express");
const { createUser, loginUser, logout } = require("../../controllers/userControllers");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");
const router = express.Router();

router.post("/createuser", createUser);
router.post("/login", isLoggedIn, loginUser);
router.post("/logout", logout);

module.exports = router;
