import express, { Application } from "express";
import { Response, Request } from "express";
const Drawings = require ("../model/model.ts")


const router = express.Router();

router.get("/all-drawings", async (req, res) => {
  const drawings: Object[] = await Drawings.find();
  res.send(drawings);
});

router.post("/add-drawing", async (req: Request, res: Response) => {
  const post: object = req.body;

  try {
    const doc = new Drawings(post);
    await doc.save();
    res.send(doc);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
