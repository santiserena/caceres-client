import express from "express";
const mongoose = require ("mongoose");
const routes = require("./src/routes/routes");
const morgan = require("morgan")
require ('dotenv').config();

var app = express();

const port = process.env.PORT;

app.listen(port, () => console.log("Listening on port", port));

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => console.log("connected to db"))
  .catch((err: Error) => console.log(err));

app.use("/", routes);

/* 21 min */