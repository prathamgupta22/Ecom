import express from "express";
import {
  createProductController,
  deleteProductController,
  deleteProductImageController,
  getAllproductController,
  getTopProductsController,
  productReviewController,
  singleProductController,
  updateImageController,
  updateProductController,
} from "../controllers/product.controller.js";
import { isAuth, isAdmin } from "../middlewares/auth.middlewares.js";
import { singleUpload } from "./../middlewares/multer.middleware.js";

const router = express.Router();

//routes
router.get("/get-all", getAllproductController);

router.get("/:id", singleProductController);

router.post("/create", isAuth, isAdmin, singleUpload, createProductController);

router.put("/:id", isAuth, isAdmin, updateProductController);

router.put("/image/:id", isAuth, isAdmin, singleUpload, updateImageController);

router.delete(
  "/delete-image/:id",
  isAuth,
  isAdmin,
  deleteProductImageController
);

router.delete("/delete/:id", isAuth, isAdmin, deleteProductController);

//review product
router.put("/:id/review", isAuth, productReviewController);

// GET TOP PRODUCTS
router.get("/product/top", getTopProductsController);

export default router;
