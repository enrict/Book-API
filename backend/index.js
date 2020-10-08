// importing the express package
let express = require("express");

// initialising the server
const server = express();

// setting the server port
server.set("port", 3000);

// starting the server
server.listen(server.get("port"), () => {
  console.log("SERVER ON:", server.get("port"));
});
