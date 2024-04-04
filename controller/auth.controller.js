const { User } = require("../model/user.model");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const doc = await user.save();

    res.status(201).json({id: doc.id, role: doc.role});
  } catch (error) {
    // console.error(error);
    res
      .status(400)
      .json({ error: "Failed to create user", details: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else if (user.password === req.body.password) {
      res.status(201).json({
        id: user.id,
        role: user.role,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
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
