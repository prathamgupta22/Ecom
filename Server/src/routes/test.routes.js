import express from "express";
import { testContoller } from "../controllers/test.controllers.js";

//router object
const router = express.Router();

//routes
router.get("/test", testContoller);

export default router;
