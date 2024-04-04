const {
  createOrder,
  fetchOrderByUser,
  updateOrder,
  deleteOrder,
  fetchAllOrders,
} = require("../controller/order.controller");

const orderRoutes = require("express").Router();

orderRoutes
  .post("/", createOrder)
  .get("/", fetchAllOrders)
  .get("/user/:userId", fetchOrderByUser)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder);

module.exports = orderRoutes;
