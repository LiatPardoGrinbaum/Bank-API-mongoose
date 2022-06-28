import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true, lowercase: true },
//   password: { type: String, required: true },
//   accounts: { type: Array, default: [] },
// });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  accounts: {
    type: Array,
    default: [],
  },
});

const accountSchema = new mongoose.Schema({
  cash: { type: Number, required: true },
  credit: {
    type: Number,
    required: true,
    validate(value) {
      if (value <= 0) {
        throw new Error("Credit must be a positive number!");
      }
    },
  },
  isActive: { type: Boolean },
  accountId: { type: Number, unique: true },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

// not an arrow function. (we use this keyword)
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisismynewcourse");
  user.tokens = user.tokens.concat({ token });
  await user.save(); //saves it to the database
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  //when password field is modified (created or updated)
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  console.log("just before saving!");
  //when its done:
  next();
});

const User = mongoose.model("users", userSchema);
const Account = mongoose.model("accounts", accountSchema);

export { User, Account };
