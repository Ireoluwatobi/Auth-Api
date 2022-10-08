const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const resetPassword = async (req, res) => {
  const { password, token } = req.body;

  const validate = jwt.verify(token, process.env.PASS);

  const { id } = validate;

  const user = await User.findById(id);
  console.log(user)
  
  try {
    
    const secret = await bcrypt.genSalt(10);

   const hashedPassword = await bcrypt.hash(password, secret);

    user.password = hashedPassword;
    await user.save();

    res.json({
      status: true,
      message: "password Saved!",
    });
  } catch (error) {
    res.json({
        status: false,
        message: "User does not exist",
        error
      });
  }
};


module.exports = resetPassword