import JWT from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Unauthorized User",
    });
  }
  const decodeData = JWT.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodeData._id);
  next();
};
