const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const getAllUser = async (req, res) => {
  const token = req.headers.authorization;

  const { id } = jwt.verify(token, process.env.JWT_PASS);

  const findUser = await User.findById(id);

  if (findUser) {
    const allUser = await User.findOne({});
    res.json({
      status: true,
      Users: allUser,
    });
  } else {
    res.json({
      status: false,
      message: "Access Denied, user does not exist.",
    });
  }
};

module.exports = getAllUser;
