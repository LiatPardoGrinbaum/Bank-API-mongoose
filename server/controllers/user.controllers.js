import { User } from "../models/user-account-models.js";

//* made some changes due to authenticaon addition
//* Added login and logout routes. (add user is the register route)

//(signup / register)
export const addUser = async (req, res) => {
  try {
    const userBodyToSave = req.body;
    const newUser = new User(userBodyToSave);
    //save() is asynchronic
    const savedUser = await newUser.save();
    const token = await savedUser.generateAuthToken();
    res.status(200).send({ savedUser, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
//login
export const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) throw new Error("Please fill all fields.");
    const user = await User.findByCredentials(req.body.email, req.body.password);

    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

//logout
//before sending response it goes to auth (middlewere) and gets current logged in user and token.
export const logOut = async (req, res) => {
  try {
    //get rid of urrent token...
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    res.send();
    await req.user.save();
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ users }); //!changed it to users. not data: users. need to change in other parts too
  } catch (error) {
    res.status(400).send();
  }
};

export const getSpecificUser = async (req, res) => {
  try {
    const username = req.params.username; //it means change the name from id to userId (destructure and then rename)
    console.log(username);

    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("User is not exist in users collection!");
    }
    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send(error.message);
    //will get this error for example if the id given is not vlid in mongoose (more then 24 cars for exa mple), else if the id is in a valid format but not exist it will catch the error from above "user is not exist..."
  }
};

/* 


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
 */
