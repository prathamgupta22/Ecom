import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";

//dotenv config
dotenv.config();

//cloudinary config
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//import route
import testRoutes from "./routes/test.routes.js";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import categoryRoutes from "./routes/category.routes.js";

//route
app.use("/api/v1", testRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cat", categoryRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to node server</h1>");
});

export default app;
