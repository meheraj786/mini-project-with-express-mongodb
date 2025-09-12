const mongoose = require("mongoose");

exports.dbConnect = async () => {
  try {
    require("dotenv").config();
    mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log("Can't Connect DB");
  }
};
