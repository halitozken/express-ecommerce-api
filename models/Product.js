import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    desc: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: true,
    },

    categories: {
      type: Array,
    },

    color: {
      type: Array,
    },

    price: {
      type: String,
      required: true,
    },

    size: {
      type: Array,
    },

    price: {
      type: Number,
      required: true,
    },

    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
