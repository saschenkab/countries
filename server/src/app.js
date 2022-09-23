const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index");

const server = express();

//    C O R S   M I D D L E W A R E
let allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
};

// This is a built-in middleware funtion in Express. It parses incoming requests with urlencoded payloads and is based on body-parser
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(allowCrossDomain);

server.use("/", routes);

// Error catching endware
server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || error;
  console.error(error);
  res.status(status).send(message);
});

module.exports = server;
