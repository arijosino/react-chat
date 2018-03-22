/*eslint no-console: "off"*/

global.__base = __dirname + "/";

const express = require("express");
const bodyParser = require("body-parser");
const chatService = require("./chatservice");

const config = {
  port:8080
};

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes
app.use(express.static("client"));

const server = app.listen(process.env.PORT || config.port, () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}`);
});

chatService(server);//binding chat service