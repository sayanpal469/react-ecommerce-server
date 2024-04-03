const { fetchBrands, createBrand } = require("../controller/brand.controller");

const brandRoutes = require("express").Router();

brandRoutes.route("/").post(createBrand).get(fetchBrands);
module.exports = brandRoutes;
