import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import { getAllUsers, registerUser } from "./controllers/user.js";
import { loginUser } from "./controllers/login.js";

const app = express();
config({ path: ".env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Nodejs_practice_Auth",
  })
  .then(() => console.log("mongoDB connected ..!"))
  .catch((error) => console.log(error));
app.post("/user/register", registerUser);
app.post("/user/login", loginUser);
app.get("/user/allUsers", getAllUsers);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
