const { updateUser, fetchUserById } = require("../controller/user.controller");

const userRoutes = require("express").Router();

userRoutes.get("/:id", fetchUserById).patch("/:id", updateUser);

module.exports = userRoutes;
