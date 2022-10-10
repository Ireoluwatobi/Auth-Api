const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let type = path.extname(file.originalname);
    if (type !== ".jpng" && type !== ".jpg" && type !== ".png") {
      cb(new Error("file type not supported"), false);
    }
    cb(null, true);
  },
});
