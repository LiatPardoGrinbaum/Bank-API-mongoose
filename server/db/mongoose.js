import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();
// const URL = "mongodb://localhost:27017/Bank-api"; // Bank-api is name of the local database

const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.385rtc8.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(URL, (error, mongoDBInstance) => {
  if (error) throw new Error("MongoDB Connection Error: " + error);
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
    //or = "development"?
    const { host, port, name } = mongoDBInstance;
    console.log({ host, port, name });
  }
});
