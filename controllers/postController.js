const Post = require("../models/post.model");
const User = require("../models/user.model");

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;

    let user = await User.findOne({ email: req.user.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const newPost = new Post({
      user: user._id,
      content,
    });

    const savedPost = await newPost.save();

    user.posts.push(savedPost._id);
    await user.save();

    res.status(201).json({
      data: savedPost,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

exports.getAllPost = async (req, res) => {
  const allPosts = await Post.find({}).populate("user")
  res.status(200).json({
    data: allPosts,
  });
};
exports.editPost = async (req, res) => {
  const post = await Post.findOneAndUpdate({ _id: req.params.id }, {Content: req.body.content});
  res.status(200).json({
    data: post,
  });
};
