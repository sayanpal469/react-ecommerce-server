const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  lable: {
    type: String,
    required: true,
    unique: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
  },
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
