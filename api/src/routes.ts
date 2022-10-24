import express, { Application } from "express";
import { Response, Request } from "express";

const router = express.Router();

router.get("/hello", (req: Request, res: Response): void => {
  res.send("hello!");
});

module.exports = router;
