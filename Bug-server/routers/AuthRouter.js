import express from 'express';
import { login, signup, getUserInfo, updateProfile, getAllFiles } from '../controllers/AuthController.js';
import { verifyToken } from '../middlewares/AuthMiddlewares.js';

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/user-info", verifyToken, getUserInfo);
authRouter.get("/avatar", getAllFiles);
authRouter.post("/update-profile", verifyToken, updateProfile);



export default authRouter;
