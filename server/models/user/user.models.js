import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  accounts: { type: Array, default: [] },
});

const accountSchema = new mongoose.Schema({
  cash: { type: Number, required: true },
  Credit: {
    type: Number,
    required: true,
    validate(value) {
      if (value <= 0) {
        throw new Error("Credit must be a positive number!");
      }
    },
  },
  isActive: { type: Boolean },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const User = mongoose.model("users", userSchema);
const Account = mongoose.model("accounts", accountSchema);

export { User, Account };
