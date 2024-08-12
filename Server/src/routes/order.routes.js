import express from "express";
import {
  changeOrderStatusController,
  createOrderController,
  getAllOrdersController,
  getMyOrdersCotroller,
  paymentsController,
  singleOrderDetailsController,
} from "../controllers/order.controller.js";
import { isAdmin, isAuth } from "../middlewares/auth.middlewares.js";
const router = express.Router();

//routes

router.post("/create", isAuth, createOrderController);

router.get("/my-orders", isAuth, getMyOrdersCotroller);

router.get("/my-orders/:id", isAuth, singleOrderDetailsController);

//ACCEPT PAYMENTS
router.post("/payments", isAuth, paymentsController);

//ADMIN PART
router.get("/admin/get-all-orders", isAuth, isAdmin, getAllOrdersController);

//change order status
router.put("/admin/order/:id", isAuth, isAdmin, changeOrderStatusController);

export default router;
