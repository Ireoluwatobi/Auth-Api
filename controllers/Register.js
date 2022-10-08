const User = require("../models/userModel");

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(404).json({
      status: false,
      message: "provide all fields",
    });
  }
  const mail = await User.findOne({ email });
  if (mail) {
    res.status(404).json({
      status: false,
      message: "email already exists",
    });
  }

  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    const user = await newUser.save();
    res.json({
      status: true,
      message: "register successfully",
    });
  } catch (error) {}
};

module.exports = {
  register,
};
