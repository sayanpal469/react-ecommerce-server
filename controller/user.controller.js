const User = require("../model/user.model");

const fetchUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, "name email addresses orders").exec();
    res.status(201).json(user);
  } catch (error) {
    // console.error(error);
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    // console.error(error);
    res.status(500).json(error.message);
  }
};

module.exports = {
  fetchUserById,
  updateUser,
};
