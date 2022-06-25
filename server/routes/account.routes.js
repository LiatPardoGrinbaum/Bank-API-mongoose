import express from "express";
const accountRouter = express.Router();

// import { getAllusers, addUser, getSpecificUser } from "../controllers/account.controllers.js";
import { getAllAccounts, addAccount } from "../controllers/account.controllers.js";
//? a bit different from first version of bank-api. now the account have their own id but there's no field for users id.
//?and in users model there's an array with all its accounts id's

accountRouter.get("/accounts", getAllAccounts);
accountRouter.post("/accounts", addAccount);
// accountRouter.get("/accounts/:id", getSpecificAccount);
// accountRouter.put("/accounts/depodit/:id", depositMoneyToAccount);
// accountRouter.put("/accounts/withdraw/:id", withdrawMoneyFromAccount);
// accountRouter.put("/accounts/credit/:id", updateCreditToAccount);
// accountRouter.put("/accounts/transfer/:id1/:id2", transferMoneyAccounts);

// userRouter.get("/getSpecificUser/:id", getSpecificUser);
// userRouter.put("/updateAnyUserField/:id", updateAnyUserField);
// userRouter.delete("/deleteUserPermanent/:id", deleteUserPermanent);

export { accountRouter };
