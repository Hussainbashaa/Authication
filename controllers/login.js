// import { UserLogin } from "../Models/Login";
import { User } from "../Models/User.js";
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username == "" || password == "") {
      return res.status(400).json({
        message: "Username and password are required",
        success: false,
      });
    }

    let userLogin = await User.findOne({ username, password });
    if (!userLogin) {
      return res
        .status(401)
        .json({ message: "Invalid username or password", success: false });
    }
    res
      .status(200)
      .json({ message: "Login successful", userLogin, success: true });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
