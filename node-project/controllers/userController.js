import User from "../models/models.js";

export const createUser = async (request, response) => {
    const user = await new User(request.query);
    try {
        await user.save();
        response.status(200).json(user);
    } catch (e) {
        response.status(500).json(e);
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.json(users);
    } catch (e) {
        response.status(500).json(e);
    }
}

export const updateUser = async (request, response) => {
    console.log(request.query);
    try {
        const user = await User.findByIdAndUpdate(request.query._id, {
            $set: {
                name: request.query.name,
                age: request.query.age
            }
        });
        response.status(200).json('User updated');
    } catch (e) {
        response.status(500).json(e);
    }
}

export const deleteUser = async (req, res) => {
    try {
        let user = await User.findById(req.query._id);
        await user.delete();
        res.status(200).json('User deleted successfully');
    } catch (e) {
        res.status(500).json(e);
    }
}
