const User = require("../../models/userModel");
const { transporter, mailOptions } = require("./mailConfig");

const reset = async (req, res) => {
  const { email } = req.body;

  if (!email) {
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
    var mailOption = mailOptions(
      email,
      "Forgot Password",
      `Your password is ${mail.password}`
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
      message: "password sucessfully sent to your email",
    });
  }
};

module.exports = {
  reset,
};
