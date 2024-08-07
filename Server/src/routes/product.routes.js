import express from "express";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllproductController,
  singleProductController,
  updateImageController,
  updateProductController,
} from "../controllers/product.controller.js";
import { isAuth } from "../middlewares/auth.middlewares.js";
import { singleUpload } from "./../middlewares/multer.middleware.js";
const router = express.Router();

//routes
router.get("/get-all", getAllproductController);

router.get("/:id", singleProductController);

router.post("/create", isAuth, singleUpload, createProductController);

router.put("/:id", isAuth, updateProductController);

router.put("/image/:id", isAuth, singleUpload, updateImageController);

router.delete("/delete-image/:id", isAuth, deleteProductImageController);

router.delete("/delete/:id", isAuth, deleteProductController);
export default router;
