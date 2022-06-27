import express, { Express, Request, Response } from "express";

const app: Express = express();
app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("welcome in shopping");
});
app.listen(3000, () => {
  console.log("server started .💥");
});
