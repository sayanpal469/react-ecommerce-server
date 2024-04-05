const Cart = require("../model/cart.model");

const addToCart = async (req, res) => {
  try {
    // if (!req.body.label || !req.body.value) {
    //   return res.status(400).json({ error: "label and value are required" });
    // }

    const cart = new Cart(req.body);
    const savedCart = await cart.save();

    res.status(201).json(savedCart);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ error: "Failed to create cart item", details: error.message });
  }
};

const fetchCartByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const cartItems = await Cart.find({ user: user })
      .populate("user")
      .populate("product")

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedItem = await Cart.findByIdAndUpdate(id, req.body, {
      new: true
    });

    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    const result = await updatedItem.populate("product")

    res.status(200).json(result);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to update cart item", details: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Cart.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json({
      message: "Item deleted successfully from the cart",
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to delete cart item", details: error.message });
  }
};

module.exports = {
  addToCart,
  fetchCartByUser,
  updateCart,
  deleteFromCart
};
