const express = require("express");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");
const { like } = require("../../controllers/likesController");
const router = express.Router();

router.post("/like/:id", isLoggedIn, like)


module.exports = router;