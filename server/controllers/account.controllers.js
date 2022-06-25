import { Account } from "../models/user-account-models.js";
import { withdrawValid } from "../srevices/account.service.js";

export const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).send({ data: accounts });
  } catch (error) {
    res.status(400).send();
  }
};

export const addAccount = async (req, res) => {
  try {
    const accountBodyToSave = req.body;
    const newAccount = new Account(accountBodyToSave);
    console.log({ accountBodyToSave });
    const savedAccount = await newAccount.save();
    res.status(200).send({ data: savedAccount });
  } catch (error) {
    res.status(400).send();
    console.log(error.message);
  }
};

export const getSpecificAccount = async (req, res) => {
  try {
    const { accountId } = req.body;
    const account = await Account.findOne({ accountId });
    if (!account) {
      throw new Error("account is not exist in accounts collection!");
    }
    res.status(200).send({ data: account });
  } catch (error) {
    res.status(400).send(error.message);
    //will get this error for example if the id given is not vlid in mongoose (more then 24 cars for example), else if the id is in a valid format but not exist it will catch the error from above "user is not exist..."
  }
};

export const depositMoneyToAccount = async (req, res) => {
  try {
    const { accountId, amount } = req.body;
    const account = await Account.findOne({ accountId });
    if (account.isActive === false) throw new Error("Account is not active!");
    account.cash += amount;
    const updatedAccount = await account.save();
    //another way:
    // const updatedAccount = await Account.findOneAndUpdate({ accountId }, { cash: account.cash + amount }, { new: true }); //the default of new is false
    res.status(200).send({ data: updatedAccount });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const withdrawMoneyFromAccount = async (req, res) => {
  try {
    const { accountId, amount } = req.body;
    const account = await Account.findOne({ accountId });
    if (account.isActive === false) throw new Error("Account is not active!");
    const { newCash, newCredit } = withdrawValid(account, amount);
    // const updatedAccount = await Account.findOneAndUpdate({ accountId }, { cash: newCash, credit: newCredit }, { new: true }); //the default of new is false
    account.cash = newCash;
    account.credit = newCredit;
    const updatedAccount = await account.save();
    res.status(200).send({ data: updatedAccount });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//update credit
export const updateCreditToAccount = async (req, res) => {
  try {
    const { accountId, amount } = req.body;
    const account = await Account.findOne({ accountId });
    if (account.isActive === false) throw new Error("Account is not active!");
    account.credit = amount;
    const updatedAccount = await account.save();
    res.status(200).send({ data: updatedAccount });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//TODO - transfer
