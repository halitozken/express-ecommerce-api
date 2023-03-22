import express from "express";
import user from "./user.js";
import auth from "./auth.js";
import product from "./product.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/product", product);

export default router;
