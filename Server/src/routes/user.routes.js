import express from "express";
import {
  getUserController,
  loginController,
  logout,
  registerController,
  resetpasswordController,
  updatePasswordController,
  updateProfileController,
  updateProfilePhoto,
} from "../controllers/user.controller.js";
import { isAuth } from "../middlewares/auth.middlewares.js";
import { singleUpload } from "./../middlewares/multer.middleware.js";
import { rateLimit } from "express-rate-limit";

// RATE LIMITER
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Use an external store for consistency across multiple server instances.
});

//router object
const router = express.Router();

//routes
router.post("/register", limiter, registerController);
router.post("/login", limiter, loginController);
router.get("/profile", isAuth, getUserController);
router.get("/logout", isAuth, logout);
router.put("/update-profile", isAuth, updateProfileController);
router.put("/update-password", isAuth, updatePasswordController);
router.put("/update-picture", singleUpload, isAuth, updateProfilePhoto);
router.put("/reset-password", resetpasswordController);
export default router;
