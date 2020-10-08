// importing the express package
let express = require("express");
let morgan = require("morgan");
let multer = require("multer");
let path = require("path");

// let express = require("express");

// initialising the server
const server = express();

// setting the server port
server.set("port", 3000);

// middleware
server.use(morgan("dev"));
let storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname)); // gets the date as numbers with original extension
  },
});
server.use(multer({ storage }).single("image"));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// starting the server
server.listen(server.get("port"), () => {
  console.log("SERVER ON:", server.get("port"));
});
