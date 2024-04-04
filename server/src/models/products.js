const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  imgUrl: String,
  name: String,
  review: Number,
  price: Number,
  modelProducts: {
    type: String,
    enum: [
      "ManFashion",
      "WomenFashion",
      "WomenAccessories",
      "ManAccessories",
      "DiscountDeals",
    ],
  },
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
