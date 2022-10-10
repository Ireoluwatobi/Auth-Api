const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const header = req.headers.authorization;
 
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Please include a token in the header",
    });
  }

  const token = header.split(" ")[1];
  try {
    const { id } = jwt.verify(token, process.env.JWT_PASS);
    const validate = await User.findById(id);
    req.user = { userId: validate._id };
  } catch (error) {
    res.status(401).json({
      message: "You do not have access to this route",
    });
  }
  next()
};
 module.exports = authMiddleware