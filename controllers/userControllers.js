const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const { name, username, age, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(500).json({ message: "User Already Registered" });
  bcrypt.hash(password, 10, async function (err, hash) {
    const newUser = new User({
      name,
      username,
      age,
      email,
      password: hash,
    });
    const savedUser = await newUser.save();
    res.status(201).json({
      message: savedUser,
    });
  });
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) return res.status(500).json({ message: "User is not created!" });

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      const token = jwt.sign({ email: email }, "shhhhh");
      res.cookie("token", token);
      res.status(200).json({
        message: "You Can Login",
      });
    } else {
      res.status(500).json({
        message: "Password is not Match",
      });
    }
  });
};
exports.profile = async (req, res) => {
  if (req.user == null) {
    res.json({
      data: "no user",
    });
  } else {
    const profile= await User.findOne({email: req.user.email})
    await profile.populate("posts")
    res.json({
      data: profile,
    });
  }
};
exports.logout = async (req, res) => {
  res.cookie("token", "");
  res.json({
    message: "Logout Successfull",
  });
};
