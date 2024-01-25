const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  lable: {
    type: String,
    required: true,
    unique: true
  },
  value: {
    type: String,
    required: true,
    unique: true
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
