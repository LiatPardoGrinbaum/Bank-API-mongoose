import { Account } from "../models/user-account-models.js";

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
    res.status(200).send({ data: newAccount });
  } catch (error) {
    res.status(400).send();
    console.log(error.message);
  }
};
