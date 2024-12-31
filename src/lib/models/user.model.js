import mongoose from "mongoose";

// Correctly use `mongoose.Schema`
const userSchema = new mongoose.Schema(
  {
    ClerkId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePhoto: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Correctly use `mongoose.models`
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
