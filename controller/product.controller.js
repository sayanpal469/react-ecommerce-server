const Product = require("../model/product.model");

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    // console.log(savedProduct);
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create product" });
  }
};

const fetchAllProducts = async (req, res) => {
  try {
    let query = Product.find({});
    let totalProductsQuery = Product.find({});

    if (req.query.category) {
      query = query.find({ category: req.query.category });
      totalProductsQuery = totalProductsQuery.find({ category: req.query.category });
    }

    if (req.query.brand) {
      query = query.find({ brand: req.query.brand });
      totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
    }

    if (req.query._sort && req.query._order) {
      query = query.sort({ [req.query._sort]: req.query._order });
    }

    const totalDocs = await totalProductsQuery.count().exec();

    if (req.query._page && req.query._limit) {
      const pageSize = req.query._limit;
      const page = req.query._page;
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }

    const products = await query.exec();
    res.set('X-Total-Count', totalDocs)
    res.status(201).json(products);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to create product" });
  }
};

module.exports = {
  createProduct,
  fetchAllProducts,
};
