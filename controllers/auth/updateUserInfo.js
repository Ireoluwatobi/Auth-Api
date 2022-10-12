const User = require("../../models/userModel");

const updateUser = async (req, res) => {
  const { userId } = req.user;

  try {
    // const user = await User.findOne(userId)
    // console.log(user.firstName)
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true }
    );
    if (user) {
      res.status(200).json({
        status: true,
        message: "Info Updated",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: false,
      message: "User not Found!",
      error,
    });
  }
};

module.exports = updateUser;

// authentication flow medium
