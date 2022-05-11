const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  // usersLiked: { type: Number, required: true },
  // usersDisliked: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);