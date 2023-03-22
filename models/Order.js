import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    status: {
      type: String,
      required: true,
    },

    amount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);

