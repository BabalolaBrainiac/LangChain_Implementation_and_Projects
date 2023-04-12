import express, {response, Router} from "express";
import { NextFunction, Request, Response } from "express";
import { Openai } from "./langchain/openai.js";

const router: Router = express.Router();

router.post(
  "/question/send",
  async (req: Request, res: Response) => {
      console.log(req.body)
    const question : any = req.body
    return res.send(await Openai.RunBasicCommand(question))
  }
);

router.use((req, res) => {
  return res.status(404).json({
    message: "The route your are calling does not exist",
    error: {
      status: 404
    }
  });
})
export default router