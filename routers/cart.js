import express from "express";

import { addToCart, getCartFromUser } from "../controllers/cart.js";
import getAccessToRoute from "../middlewares/authorization/auth.js";

const router = express.Router();

router.get("/:id", getAccessToRoute, getCartFromUser);
router.post("/", getAccessToRoute, addToCart);

export default router;
