import sqlite3 from "sqlite3";

import DebugController from "./debug.controller";

class DatabaseController {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database(
      "./mydb.sqlite3",
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err) => {
        if (err) {
          console.error(err.message);
        } else {
          DebugController.log("Connected to the SQLite database.");
        }
      }
    );
  }

  public createTable(tableName: string, columns: string): void {
    const sql = `CREATE TABLE IF NOT EXISTS ${tableName} (${columns})`;
    this.db.run(sql, (err) => {
      if (err) {
        throw err;
      }
      DebugController.log(`Table ${tableName} created.`);
    });
  }

  public close(): void {
    this.db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      DebugController.log("Close the database connection.");
    });
  }

  public run(sql: string, callback: (err: Error) => void): void {
    this.db.run(sql, callback);
  }
}

export default new DatabaseController();
