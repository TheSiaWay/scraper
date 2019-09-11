import cron from "node-cron";
import { db } from "./db";
import { getScrapedData, log } from "./utils";

const writeToDB = ({ tFollowers, iFollowers }) => {
  db.get("twitterFollowers")
    .push({
      day: Date.now(),
      count: tFollowers
    })
    .write();
  db.get("instagramFollowers")
    .push({
      day: Date.now(),
      count: iFollowers
    })
    .write();
};

cron.schedule("* * * * *", () => {
  log("adding scraped data to DB");
  getScrapedData(writeToDB);
});
