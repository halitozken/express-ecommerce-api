import express from "express";
import {
  addProduct,
  getAllProducts,
  deleteProduct,
  editProduct,
  getOneProduct,
  deleteAllProduct,
} from "../controllers/products.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/:id", getOneProduct);
router.post("/add", addProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);
router.delete("/all", deleteAllProduct);

export default router;
