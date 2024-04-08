const mongoose = require("mongoose");

const FashionSchema = new mongoose.Schema({
  imgUrl: String,
  size: String,
  color: String,
  price: String,
  brand: String,
  collection: String,
});

const FashionModel = mongoose.model("fashion", FashionSchema);
module.exports = FashionModel;
