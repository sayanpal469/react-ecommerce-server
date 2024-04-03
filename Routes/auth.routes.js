const { createUser, loginUser } = require("../controller/auth.controller");

const authRoutes = require("express").Router();

authRoutes.post("/signup", createUser).post('/login', loginUser)

module.exports = authRoutes;
