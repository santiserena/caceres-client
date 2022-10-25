import express, { Application } from "express";
import { Response, Request } from "express";

const router = express.Router();

router.get("/hello", (req: Request, res: Response): void => {
  res.send("hello!");
});

router.post("/add-drawing", (req: Request, res: Response): void => {

const post : object = req.body;



  res.send(post);
});

module.exports = router;
