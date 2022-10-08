const mongoose = require("mongoose");


const selectDB = ( ) => {
    if(process.env.NODE_ENV === "production"){
        return process.env.MONGO_URI
    }else{
      return process.env.LOCAL_MONGO_URL
    }
}

const createDB = async () => {
  try {
    const connect = await mongoose.connect(selectDB());
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
