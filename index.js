const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("colors");

const createDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const notFound = require("./middlewares/notFound");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use(notFound);

const PORT = process.env.PORT;

const startApp = async () => {
  try {
    await createDB();
    app.listen(PORT, console.log(`server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
    throw error;
  }
};
startApp();

module.exports = app;
