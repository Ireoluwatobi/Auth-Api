const User = require("../models/userModel");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({
      status: false,
      message: "provide all fields",
    });
  }
  const mail = await User.findOne({ email });

  if (!mail) {
    res.status(404).json({
      status: false,
      message: "user does not exist",
    });
  } else {
    if (mail.password == password) {
      res.status(200).json({
        status: true,
        message: `login successfully. User ${mail.firstName}`,
      });
    } else {
      res.status(404).json({
        status: false,
        message: `incorrect credentials`,
      });
    }
  }
};

module.exports = {
  login,
};
