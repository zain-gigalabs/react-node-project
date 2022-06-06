import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  login,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/add_user", createUser);
router.post("/login", login);
router.get("/users", getUsers);
router.put("/update_user", updateUser);
router.delete("/delete_user", deleteUser);

export default router;
