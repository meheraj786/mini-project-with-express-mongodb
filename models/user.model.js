const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
  name: String,
  username: String,
  age: Number,
  email: String,
  password: String,
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
})

const User= mongoose.model("User", userSchema)
module.exports=User