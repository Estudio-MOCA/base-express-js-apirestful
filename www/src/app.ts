import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import path from "path";
import apiRouter from "./routes/api";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/api", apiRouter);

process.on("unhandledRejection", (error) => {
  process.exit();
})

export default app;