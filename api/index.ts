import express from "express";
const routes = require("./src/routes");
const morgan = require("morgan")
require ('dotenv').config();

var app = express();

const port = process.env.PORT;

app.listen(port, () => console.log("Listening on port", port));

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use("/", routes);