import { twitterUser, instaUser } from "./../secrets/key";
import { getData, getTwitterFollower, getInstagramFollower } from "./scraper";
import { db } from "./db";

const log = console.log;

const getScrapedData = callback => {
  const Twitter = `https://twitter.com/${twitterUser}`;
  const Instagram = `https://www.instagram.com/${instaUser}/?__a=1`;
  Promise.all([getData(Twitter), getData(Instagram, "JSON")])
    .then(([tData, iData]) => {
      const tFollowers = getTwitterFollower(tData);
      const iFollowers = getInstagramFollower(iData);
      callback({ tFollowers, iFollowers });
    })
    .catch(err => log("err", err));
};

const getStoredData = () => {
  const twitter = db.get("twitterFollowers");
  const insta = db.get("instagramFollowers");
  return { twitter, insta };
};

export { getScrapedData, log, getStoredData };
