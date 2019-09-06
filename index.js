import express from "express";
import { getScrapedData, log } from "./lib/utils";
import "./lib/cron"; // importing cron job file to start the job

const app = express();

app.get("/scrape", (req, res, next) => {
  getScrapedData(({ tFollowers, iFollowers }) =>
    res.send({ tFollowers, iFollowers })
  );
});

app.listen(3000, () => log("listening to port 3000"));
