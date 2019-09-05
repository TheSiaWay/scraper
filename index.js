import {
  getData,
  getTwitterFollower,
  getInstagramFollower
} from "./lib/scraper";
import { username } from "./secrets/key";

const log = console.log;

const go = () => {
  const Twitter = `https://twitter.com/${username}`;
  const Instagram = `https://www.instagram.com/${username}/?__a=1`;
  Promise.all([getData(Twitter), getData(Instagram, "JSON")])
    .then(([tData, iData]) => {
      const tFollowers = getTwitterFollower(tData);
      const iFollowers = getInstagramFollower(iData);
      log(
        `I have ${iFollowers} insta followers + ${tFollowers} twitter followers`
      );
    })
    .catch(err => log("err", err));
};

go();
