import express, { Application } from "express";
import { Response, Request } from "express";
const Drawings = require("../model/model.ts");

const router = express.Router();

//IMAGE NAMES LIST (WITHOUT FILE)
router.get("/all-list", async (req, res) => {
  try {
    interface drawing {
      name: string;
      id: string
    }
    
    let drawings: drawing[] = await Drawings.find();
    
    console.log("llegue");

    drawings = drawings.map((el) => {
      return { name: el.name, id: el.id };
    });

    res.send(drawings);
  } catch (error) {
    console.log("error-> ", error);
  }
});

//ALL DRAWING (BIG FETCH)
router.get("/all-drawings", async (req, res) => {

  try {
    const drawings: Object[] = await Drawings.find();
    console.log("Big fetch");
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

//DELETE BY ID !!!!!!!!!!!!!!!!!!!! ver porque borra siempre el primero....
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
