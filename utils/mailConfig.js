const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});
function mailOptions(email, subject, message) {
  var mailOption = {
    from: process.env.USER,
    to: email,
    subject: subject,
    text: "token",
    html : message,
  };

  return mailOption;
}

module.exports = {
  transporter,
  mailOptions,
};
