const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ message: "Please Login" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "shhhhh");
    const loginUser=await User.findOne({email: decoded.email})
    
    req.user = loginUser;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
