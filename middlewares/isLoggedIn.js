const jwt=require("jsonwebtoken")

exports.isLoggedIn = (req, res, next) => {
  console.log(req.cookies);
  if (req.cookies.token === "") {
    res.status(500).json({
      message: "Please Login",
    });
  } else {
    var decoded = jwt.verify(req.cookies.token, "shhhhh");
    console.log(decoded);
    req.user=decoded
    next();
  }
};
