import User from "../models/models.js";
import colors from "colors";
import bcrpt from "bcrypt";
export const createUser = async (request, response) => {
  const user = await new User({
    username: request.body.username,
    email: request.body.email,
    password: bcrpt.hashSync(request.body.password, 6),
    createdDate: new Date(),
  });
  try {
    await user.save();
    response.status(200).json(user);
  } catch (e) {
    response.status(500).json(e);
  }
};

export const login = async (request, response) => {
  let user = await User.findOne({
    email: request.body.email,
  });

  if (!user) {
    return response.status(404).json({ message: "Invalid Email or Password!" });
  }

  let passwordIsValid = bcrpt.compareSync(request.body.password, user.password);

  if (!passwordIsValid) {
    return response.status(404).json({ message: "Invalid Email or Password!" });
  }

  return response.status(200).json({ data: user });
};

export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.json(users);
  } catch (e) {
    response.status(500).json(e);
  }
};

export const updateUser = async (request, response) => {
  //   console.log(request.query);
  try {
    const user = await User.findByIdAndUpdate(request.query._id, {
      $set: {
        username: request.query.username,
        age: request.query.age,
        updatedDate: new Date(),
      },
    });
    response.status(200).json("User updated");
  } catch (e) {
    response.status(500).json(e);
  }
};

export const deleteUser = async (req, res) => {
  try {
    let user = await User.findById(req.query._id);
    await user.delete();
    res.status(200).json("User deleted successfully");
  } catch (e) {
    res.status(500).json(e);
  }
};
