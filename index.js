//npm init -y, npm i express, npm i mongoose, npm i dotenv , npm i concurrently (or - npm install express mongoose dotenv)
//npm i --save-dev nodemon //need it only in devlopment enviroment
import "./server/db/mongoose.js";
import { app } from "./server/app.js";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);
const publicDirPath = path.join(__dirname, "client/build");
console.log(publicDirPath);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build/index.html"));
});
const PORT = process.env.PORT || 5050;

app.use(express.static(publicDirPath));

app.listen(PORT, (error) => {
  if (error) throw new Error("app.listen Error: " + error);
  console.log("server is up and running on port " + PORT);
});
