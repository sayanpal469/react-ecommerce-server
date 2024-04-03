const { fetchCategories, createCategory } = require("../controller/category.controller");

const categoryRoutes = require("express").Router();

categoryRoutes.route("/").post(createCategory).get(fetchCategories);
module.exports = categoryRoutes;
