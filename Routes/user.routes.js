const { updateUser, fetchUserById } = require("../controller/user.controller");

const userRoutes = require("express").Router();

userRoutes.get("/:id", fetchUserById).patch("/update", updateUser);

module.exports = userRoutes;
