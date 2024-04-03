const {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProduct,
} = require("../controller/product.controller");

const productRoutes = require("express").Router();

productRoutes
  .post(createProduct)
  .get("/", fetchAllProducts)
  .get("/:id", fetchProductById)
  .patch("/:id", updateProduct);

module.exports = productRoutes;
