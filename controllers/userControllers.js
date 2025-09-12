const User = require("../models/user.model");
const bcrypt=require("bcrypt")

exports.createUser = async (req, res) => {
  const { name, username, age, email, password } = req.body;
  let user = await User.findOne({email});
  if (user) return res.status(500).json({message:"User Already Registered"})
   bcrypt.hash(password, 10, async function(err, hash) {
        const newUser =  new User({
          name,
          username,
          age,
          email,
          password: hash,
        });
        const savedUser=await newUser.save()
        res.status(201).json({
          message: savedUser
        })
      });
};
exports.loginUser = async (req, res) => {
  const { name, username, age, email, password } = req.body;
  let user = await User.findOne({email});
  if (user) return res.status(500).json({message:"User Already Registered"})
   bcrypt.hash(password, 10, async function(err, hash) {
        const newUser =  new User({
          name,
          username,
          age,
          email,
          password: hash,
        });
        const savedUser=await newUser.save()
        res.status(201).json({
          message: savedUser
        })
      });
};
