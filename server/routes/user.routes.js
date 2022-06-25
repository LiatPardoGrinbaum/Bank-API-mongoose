import express from "express";
const userRouter = express.Router();
// import { addUser, deleteUserPermanent, getAllusers, getSpecificUser, updateAnyUserField } from "../controllers/user.controllers.js";
import { getAllusers, addUser, getSpecificUser } from "../controllers/user.controllers.js";

userRouter.get("/users", getAllusers);
userRouter.post("/users", addUser);
userRouter.get("/users/:username", getSpecificUser);

// userRouter.get("/getSpecificUser/:id", getSpecificUser);
// userRouter.put("/updateAnyUserField/:id", updateAnyUserField);
// userRouter.delete("/deleteUserPermanent/:id", deleteUserPermanent);

export { userRouter };
