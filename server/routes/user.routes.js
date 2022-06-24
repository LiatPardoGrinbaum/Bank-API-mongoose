import express from "express";
const userRouter = express.Router();
import { addUser, deleteUserPermanent, getAllusers, getSpecificUser, updateAnyUserField } from "../controllers/user.controllers.js";
//can also do as this:
// import * as controllers from "../controllers/user.controllers.js"  and then: controllers.assUser and so on..

//on routes we can put lots of callbacks. in the midlle there will be the middleweres and in the end its the controller.
userRouter.get("/getSpecificUser/:id", getSpecificUser);
userRouter.get("/getAllusers", getAllusers);
userRouter.put("/updateAnyUserField/:id", updateAnyUserField);
userRouter.delete("/deleteUserPermanent/:id", deleteUserPermanent);
userRouter.post("/addUser", addUser);
export { userRouter };
