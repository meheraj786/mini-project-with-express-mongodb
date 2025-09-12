const Post = require("../models/post.model");

exports.like = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  if (post.likes.some((id) => id.equals(req.user._id))) {
    post.likes = post.likes.filter((id) => !id.equals(req.user._id));
    res.json({
      message: "Unliked",
    });
  } else {
    post.likes.push(req.user._id);
    res.json({
      message: "Liked",
    });
  }
  await post.save();
};
