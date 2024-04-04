const Order = require("../model/order.model");

const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ error: "Failed to create order", details: error.message });
  }
};

const fetchAllOrders = async (req, res) => {
  try {
    let query = Order.find({deleted: {$ne: true}});
    let totalOrdersQuery = Order.find({deleted: {$ne: true}});

    if (req.query._sort && req.query._order) {
      query = query.sort({ [req.query._sort]: req.query._order });
    }

    const totalDocs = await totalOrdersQuery.count().exec();

    if (req.query._page && req.query._limit) {
      const pageSize = req.query._limit;
      const page = req.query._page;
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }

    const orders = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(201).json(orders);
  } catch (error) {
    res.status(400).json(error);
  }
};

const fetchOrderByUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ user: userId });

    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order item not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to update order item", details: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order item not found" });
    }

    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to delete order", details: error.message });
  }
};

module.exports = {
  createOrder,
  fetchAllOrders,
  fetchOrderByUser,
  updateOrder,
  deleteOrder,
};
