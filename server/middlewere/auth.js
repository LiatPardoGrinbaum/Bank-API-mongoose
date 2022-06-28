import jwt from "jsonwebtoken";
import { User } from "../models/user-account-models.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", ""); // => authorization is the key and req.header("Authorization") is the value (Bearer .....)
    const decoded = jwt.verify(token, "thisismynewcourse"); //validatation of the header the user provides
    const user = await User.findOne({ _id: decoded._id, "tokens.token": token });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default auth;
