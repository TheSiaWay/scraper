import express from "express";
import cors from "cors";
import { getScrapedData, log, getStoredData } from "./lib/utils";
import "./lib/cron"; // importing cron job file to start the job

const app = express();
app.use(cors());

app.get("/scrape", (req, res, next) => {
  getScrapedData(({ tFollowers, iFollowers }) =>
    res.send({ tFollowers, iFollowers })
  );
});

app.get("/data", (req, res, next) => {
  const data = getStoredData();
  res.send(data);
});

app.listen(2093, () => {
  log(`listening to port http://localhost:2093`);
});
