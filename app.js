const express = require("express");
const cors = require("cors");
const productRoutes = require("./Routes/product.routes");
const brandRoutes = require("./Routes/brand.routes");
const categoryRoutes = require("./Routes/category.routes");
const userRoutes = require("./Routes/user.routes");
const authRoutes = require("./Routes/auth.routes");
const cartRoutes = require("./Routes/cart.routes");
const orderRoutes = require("./Routes/order.routes");
const app = express();

app.use(express.json());
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

// Products Apis
app.use("/products", productRoutes);
app.use("/brands", brandRoutes);
app.use("/categories", categoryRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Ecommerse server");
});

module.exports = app;
