import express from "express";
import { isAdmin, isAuth } from "../middlewares/auth.middlewares.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.post("/create", isAuth, isAdmin, createCategory);

router.get("/get-all", getAllCategory);

router.delete("/delete/:id", isAuth, isAdmin, deleteCategory);

router.put("/update/:id", isAuth, isAdmin, updateCategory);

export default router;
