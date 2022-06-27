import express, { Express, Request, Response } from "express";

const app: Express = express();
app.get("/", (req: Request, res: Response) => {
    return res.status(200).send("welcome in customer");

});
app.listen(3002, () => {
  console.log("server started ...");
});
