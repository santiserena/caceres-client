import express from "express"
import {Response, Request } from 'express';

const router = express.Router();

router.get('/hello', (req: Request, res: Response) => {
    res.send('hello!');
   });

module.exports = router;