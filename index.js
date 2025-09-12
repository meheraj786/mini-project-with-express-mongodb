const express = require("express");
const router = require("./routes");
const { dbConnect } = require("./db/connectDb");
const app = express();

(async () => {
  try {
    app.use(express.json())
    require('dotenv').config()
    await dbConnect()
    app.use("/", router);
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("something is wrong", error);
  }
})();
