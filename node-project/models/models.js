import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    default: 0
  },
  createdDate: {
    type: Date
  }
});

const User = mongoose.model('Users', UserSchema);

export default User;