import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ twitterFollowers: [], instagramFollowers: [] }).write();

export { db };
