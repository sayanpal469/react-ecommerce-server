const Category = require("../model/category.model");

const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const savedCategory = await category.save();
    // console.log(savedProduct);
    res.status(201).json(savedCategory);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

const fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(201).json(categories);
  } catch (error) {
    // console.error(error);
    res.status(400).json(error);
  }
};

module.exports = {
  createCategory,
  fetchCategories,
};
