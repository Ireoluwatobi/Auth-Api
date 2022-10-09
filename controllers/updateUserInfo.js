const User = require("../models/userModel");

const updateUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.findOne({ email });

    user.firstName = firstName;
    user.lastName = lastName;

    const saved = await user.save();
    if (saved) {
      res.json({
        status: true,
        message: "Info Updated",
      });
    } else {
      throw error;
    }
  } catch (error) {
    res.json({
      status: false,
      message: "User not Found!",
      error,
    });
  }
};

module.exports = updateUser;
