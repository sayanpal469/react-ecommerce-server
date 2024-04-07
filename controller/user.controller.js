const { User } = require("../model/user.model");

const fetchUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res.status(200).json({ status: true, user });
  } catch (error) {
    // console.error(error);
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    console.log(req.body);
    const email = req.body.email;
    const data = req.body;
    const user = await User.findOneAndUpdate({ email: email }, data, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
    res.status(200).json({ status: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchUserById,
  updateUser,
};
