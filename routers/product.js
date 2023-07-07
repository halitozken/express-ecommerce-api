import express from "express";
import { addProduct,getAllProducts,deleteProduct,updateProduct,getOneProduct } from "../controllers/products.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/:product_id", getOneProduct);
router.post("/add", addProduct);
router.put("/:product_id", updateProduct);
router.delete("/:product_id", deleteProduct);

// router.post("/addlist", addProductList);

export default router;
