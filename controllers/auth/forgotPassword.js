const User = require("../../models/userModel");
const { transporter, mailOptions } = require("../../utils/mailConfig");
const jwt = require('jsonwebtoken')

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(404).json({
      status: false,
      message: "provide all fields",
    });
  }
  const user = await User.findOne({ email });
 
 
  if (!user) {
    res.status(404).json({
      status: false,
      message: "user does not exist",
    });
  } else {
    const id = user._id
    const token = jwt.sign({id}, process.env.JWT_PASS,{
    "expiresIn" : '1d'  
    })
    var mailOption = mailOptions(
      email,
      "Forgot Password",
      `<a href="http://127.0.0.1/${token}">Click here to reset password</a>`
    );

    const sendMe = new Promise((resolve, reject) => {
      transporter.sendMail(mailOption, function (error, info) {
        if (error) {
          reject(error);
        } else {
          console.log("Email sent: " + info.response);
          resolve(info);
        }
      });
    });

    await sendMe;

    res.status(200).json({
      status: true,
      message: "Email sent sucessfully",
      token,
    });
  }
};

module.exports = {
  forgotPassword,
};
