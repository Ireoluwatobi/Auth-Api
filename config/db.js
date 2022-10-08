const mongoose = require("mongoose");

var URI;
if (process.env.NODE_ENV === "production") {
  URI = process.env.MONGO_URL;
} else {
  URI = process.env.LOCAL_MONGO_URL;
}
const createDB = async () => {
  console.log(process.env);
  try {
    const connect = await mongoose.connect(URI);
    // console.log(connect.connection)
    console.log(
      `Database connected sucessfully to ${connect.connection.host}`.blue
        .underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = createDB;
