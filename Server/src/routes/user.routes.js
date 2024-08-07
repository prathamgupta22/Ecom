import express from "express";
import {
  getUserController,
  loginController,
  logout,
  registerController,
  updatePasswordController,
  updateProfileController,
  updateProfilePhoto,
} from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/auth.middlewares.js";
import { singleUpload } from "./../middlewares/multer.middleware.js";

//router object
const router = express.Router();

//routes
router.post("/register", registerController);
router.post("/login", loginController);
router.get("/profile", isAuth, getUserController);
router.get("/logout", isAuth, logout);
router.put("/update-profile", isAuth, updateProfileController);
router.put("/update-password", isAuth, updatePasswordController);
router.put("/update-picture", singleUpload, isAuth, updateProfilePhoto);
export default router;
