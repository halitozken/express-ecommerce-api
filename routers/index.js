import express from "express";
import user from "./user.js";
import auth from "./auth.js";
import product from "./product.js";
import order from "./order.js";
import cart from "./cart.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/product", product);
router.use("/order", order);
router.use("/cart", cart);

export default router;
