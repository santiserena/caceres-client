import express, { Application } from "express";
import { Response, Request } from "express";
const Drawings = require("../model/model.ts");

const router = express.Router();

//IMAGE NAMES LIST (WITHOUT FILE)
router.get("/all-list", async (req, res) => {
  try {
    interface drawing {
      name: string;
    }

    let drawings: drawing[] = await Drawings.find();

    drawings = drawings.map((el) => {
      return { name: el.name };
    });

    res.send(drawings);
  } catch (error) {
    console.log("error-> ", error);
  }
});

//ALL DRAWING (BIG FETCH)
router.get("/all-drawings", async (req, res) => {
  console.log("entre");

  try {
    const drawings: Object[] = await Drawings.find();
    console.log("entre2");
    res.send(drawings);
  } catch (error) {
    console.log("error-> ", error);
  }
});

//ADD DRAWING
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

//DELETE BY ID
router.delete("/erase/:id", async (req, res) => {
  try {
    await Drawings.findOneAndRemove({
      id: req.params.id,
    });

    res.send("deleted document");
  } catch (error) {
    console.log("error-> ", error);
  }
});

module.exports = router;
