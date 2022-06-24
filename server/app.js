import express from "express";
import { userRouter } from "./routes/user.routes.js";

const app = express();

//for post and put
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
export { app };
