const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  imgUrl: String,
  description: String,
  stars: Number,
  name: String,
  job: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
