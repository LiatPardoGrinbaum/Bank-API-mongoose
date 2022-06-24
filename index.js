//npm init -y, npm i express, npm i mongoose, npm i dotenv , npm i concurrently (or - npm install express mongoose dotenv)
//npm i --save-dev nodemon //need it only in devlopment enviroment
import "./server/db/mongoose.js";
import { app } from "./server/app.js";

const PORT = process.env.PORT || 5050;

app.listen(PORT, (error) => {
  if (error) throw new Error("app.listen Error: " + error);
  console.log("server is up and running on port " + PORT);
});
