import express from "express";
import { database } from "./db/db.js";
const app = express();

database();

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen("3000", () => {
  console.log("server running");
});
