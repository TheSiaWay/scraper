import fetch from "node-fetch";
import cheerio from "cheerio";

const getData = (url, type = "HTML") => {
  return fetch(url)
    .then(res => (type === "HTML" ? res.text() : res.json()))
    .catch(err => console.log("something went wrong", err));
};

const getTwitterFollower = html => {
  const $ = cheerio.load(html);
  const { count } = $(".ProfileNav-value").data();
  return count;
};

const getInstagramFollower = ({ graphql: data }) => {
  return data.user.edge_followed_by.count;
};

export { getData, getTwitterFollower, getInstagramFollower };
