import express from "express";
const userRouter = express.Router();
// import { addUser, deleteUserPermanent, getAllusers, getSpecificUser, updateAnyUserField } from "../controllers/user.controllers.js";
import { getAllusers, addUser, getSpecificUser, login, logOut } from "../controllers/user.controllers.js";
import auth from "../middlewere/auth.js";

userRouter.get("/users", getAllusers);
userRouter.post("/users", addUser); //regiser (maybe I need to add register or sign up to the root)
userRouter.post("/users/login", login);
userRouter.post("/users/logout", auth, logOut);
userRouter.get("/users/:username", getSpecificUser);

// userRouter.get("/getSpecificUser/:id", getSpecificUser);
// userRouter.put("/updateAnyUserField/:id", updateAnyUserField);
// userRouter.delete("/deleteUserPermanent/:id", deleteUserPermanent);

export { userRouter };
