const {
  createProduct,
  fetchAllProducts,
} = require("../controller/product.controller");

const productRoutes = require("express").Router();

productRoutes.route("/").post(createProduct).get(fetchAllProducts);
module.exports = productRoutes;
