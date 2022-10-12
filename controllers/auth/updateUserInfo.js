const User = require("../../models/userModel");

const updateUser = async (req, res) => {
  const { id } = req.user;

  try {
    await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({
      status: saved,
      message: "Info Updated",
    });
  } catch (error) {
    res.json({
      status: false,
      message: "User not Found!",
      error,
    });
  }
};

module.exports = updateUser;

// authentication flow medium
