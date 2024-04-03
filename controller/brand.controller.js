const Brand = require("../model/brand.model");

const createBrand = async (req, res) => {
  try {
    if (!req.body.label || !req.body.value) {
      return res.status(400).json({ error: "label and value are required" });
    }

    const brand = new Brand(req.body);
    const savedBrand = await brand.save();

    res.status(201).json(savedBrand);
  } catch (error) {
    // console.error(error);
    res
      .status(400)
      .json({ error: "Failed to create brand", details: error.message });
  }
};

const fetchBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(201).json(brands);
  } catch (error) {
    // console.error(error);
    res.status(400).json(error);
  }
};

module.exports = {
  createBrand,
  fetchBrands,
};
