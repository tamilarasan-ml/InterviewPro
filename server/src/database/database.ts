import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(
  __dirname,
  "../../interviewproai.db"
);

const db = new Database(dbPath);

db.exec(`
CREATE TABLE IF NOT EXISTS interviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    category TEXT NOT NULL,

    difficulty TEXT NOT NULL,

    overallScore INTEGER NOT NULL,

    communication INTEGER NOT NULL,

    technicalKnowledge INTEGER NOT NULL,

    domainKnowledge INTEGER NOT NULL,

    confidence INTEGER NOT NULL,

    strengths TEXT NOT NULL,

    areasForImprovement TEXT NOT NULL,

    suggestedAnswer TEXT NOT NULL,

    recommendation TEXT NOT NULL,

    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

console.log("✅ SQLite database initialized.");

export default db;