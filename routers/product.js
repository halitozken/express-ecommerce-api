import express from "express";
import { addSingleProduct, addProductList } from "../controllers/products.js";

const router = express.Router();

router.post("/add", addSingleProduct);
router.post("/addlist", addProductList);

export default router;
