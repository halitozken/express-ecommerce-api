import express from "express";
import {
  getAllOrders,
  createOrder,
  deleteOrder,
  editOrder,
} from "../controllers/order.js";

const router = express.Router({ mergeParams: true });

router.get("/all", getAllOrders);
router.post("/:user_id", createOrder);
router.delete("/:id", deleteOrder);
router.put("/:id", editOrder);

export default router;
