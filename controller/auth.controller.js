const { User } = require("../model/user.model");

const createUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser)
      return res
        .status(403)
        .json({ status: false, message: "User already exists" });
    const user = new User(req.body);
    const doc = await user.save();

    res.status(201).json({ status: true, id: doc.id, role: doc.role });
  } catch (error) {
    // console.error(error);
    res.status(400).json({
      status: false,
      error: "Failed to create user",
      details: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  try {
    if (!user) {
      res.status(404).json({ status: false, message: "User not found" });
    } else if (user.password === req.body.password) {
      res.status(201).json({
        status: true,
        id: user.id,
        role: user.role,
      });
    } else {
      res.status(401).json({ status: false, message: "Invalid credentials" });
    }
  } catch (error) {
    // console.error(error);
    res
      .status(400)
      .json({ error: "Failed to create user", details: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
};
