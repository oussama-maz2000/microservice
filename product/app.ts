import express, { Express, Request, Response } from "express";

const app: Express = express();
app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("welcome in product");
});
app.listen(3001, () => {
  console.log("server started .💥");
});
