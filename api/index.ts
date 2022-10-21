import express, {Application} from 'express';
const routes = require ("./src/routes")

var app = express();

const port = 3000;
app.listen(port, () => console.log("Listening on port", port));

app.use(express.json());
app.use("/", routes);

//ADD CORS y .ENV