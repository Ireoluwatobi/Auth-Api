const User = require("../models/userModel");

const getAllUser = async (req, res) => {
  const allUser = await User.findOne({});
  const auth = req.headers.authorization;
  if (!auth) {
    res.json({
      status: false,
      message: "Access Denied",
    });
  } else {
    res.json({
      status: true,
      Users: allUser,
    });
  }
};
module.exports = getAllUser;
