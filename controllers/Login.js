const User = require("../models/userModel");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({
      status: false,
      message: "provide all fields",
    });
  }
  const user = await User.findOne({ email });


 const id = user._id
  const token = jwt.sign({id}, process.env.PASS, {
    'expiresIn': "30m"
  })

  if (!user) {
    res.status(404).json({
      status: false,
      message: "user does not exist",
    });
  } else {
     const validate = await bcrypt.compare(password, user.password)
    if (validate) {
      res.status(200).json({
        status: true,
        message: `login successfully. User ${user.firstName}`,
        token      
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
