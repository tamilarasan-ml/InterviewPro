import db from "./database/database";

const interviews = db
  .prepare("SELECT * FROM interviews")
  .all();

console.log("\n========== Interview Records ==========\n");

console.table(interviews);

console.log(
  `\nTotal Records: ${interviews.length}\n`
);