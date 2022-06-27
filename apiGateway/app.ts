import express, { Express, Request, Response } from "express";
import proxy from "express-http-proxy";
import cors from "cors";
const app: Express = express();
app.use(express.json());
app.use(cors());
app.use("/shopping", proxy("http://localhost:3000"));
app.use("/product", proxy("http://localhost:3001"));
app.use("/customer", proxy("http://localhost:3002"));

app.listen(8000, () => {
  console.log("server started ...");
});
