const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const updateUser = async (req, res) => {
  const token = req.headers.authorization;

  const { id } = jwt.verify(token, process.env.JWT_PASS);

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
