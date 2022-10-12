const User = require("../../models/userModel");
const { transporter, mailOptions } = require("../../utils/mailConfig");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(401).json({
      status: false,
      message: "provide all fields",
    });
  }
  const mail = await User.findOne({ email });
  if (mail) {
    res.status(403).json({
      status: false,
      message: "email already exists",
    });
  } else {
    try {
      const secret = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, secret);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      const user = await newUser.save();

      const token = jwt.sign({ email }, process.env.JWT_PASS, {
        expiresIn: "30m",
      });

      if (user) {
        const mailOption = mailOptions(
          email,
          "User Verification",
          `<a href="http://127.0.0.1/${token}">Click here to verify email</a>`
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
      }

      res.json({
        status: true,
        message:
          "Registeration successful. A verification link has been sent to your email.",
        token,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = {
  register,
};
