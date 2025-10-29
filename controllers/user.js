import { User } from "../Models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { name, username, email, phone, password } = req.body;

    let user = await User.create({ name, username, email, phone, password });
    res
      .status(201)
      .json({ message: "User registered successfully", user, success: true });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ message: "all user are", users, success: true });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
