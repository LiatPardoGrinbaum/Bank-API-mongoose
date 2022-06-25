import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  accounts: { type: Array, default: [] },
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

const User = mongoose.model("users", userSchema);
const Account = mongoose.model("accounts", accountSchema);

export { User, Account };
