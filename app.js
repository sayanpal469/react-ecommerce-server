const express = require("express");
const productRoutes = require("./Routes/product.routes");
const app = express();


app.use(express.json())

// Products Apis
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Ecommerse server");
});

module.exports = app;
