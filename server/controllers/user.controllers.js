import { User } from "../models/user/user.models.js";

export const addUser = async (req, res) => {
  try {
    const userBodyToSave = req.body;
    const newUser = new User(userBodyToSave);
    console.log({ userBodyToSave });
    //save() is asynchronic
    const savedUser = await newUser.save();
    res.status(200).send({ data: savedUser });
  } catch (error) {
    res.status(400).send();
    console.log(error.message);
  }
};

export const getSpecificUser = async (req, res) => {
  try {
    const { id: userId } = req.params; //it means change the name from id to userId (destructure and then rename)
    const user = await User.findById(userId);
    //another way:
    // const { id } = req.params;
    // const user = await User.findById(id);
    if (!user) {
      throw new Error("User is not exist in users collection!");
    }
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send();
    //will get this error for example if the id given is not vlid in mongoose (more then 24 cars for example), else if the id is in a valid format but not exist it will catch the error from above "user is not exist..."
  }
};
export const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ data: users });
  } catch (error) {
    res.status(400).send();
  }
};
export const updateAnyUserField = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const userFieldsToUpdate = req.body;
    //it saves it by default
    //userId or {_id:userId} >
    const user = await User.findByIdAndUpdate(userId, userFieldsToUpdate, { new: true }); //the default of new is false
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send();
  }
};

export const deleteUserPermanent = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await User.findByIdAndDelete({ _id: userId });
    res.status(200).send({ date: user });
  } catch (error) {
    res.status(400).send();
  }
};
