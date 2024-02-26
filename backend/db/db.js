import mysql from "mysql";

export const database = () => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "eunice99x",
    database: "testing mySQL",
  });
};
