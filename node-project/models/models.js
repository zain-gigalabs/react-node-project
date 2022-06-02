import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    hash: true,
  },
  createdDate: {
    type: Date,
  },
});

const User = mongoose.model("Users", UserSchema);

export default User;
