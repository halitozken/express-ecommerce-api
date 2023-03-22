import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },

  productName: {
    type: String,
    required: true,
    unique: true,
  },

  categoryId: {
    type: Number,
    required: true,
    unique: true,
    // ref: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    // },
  },

  unitPrice: {
    type: Number,
    required: true,
    unique: true,
  },

  quantityPerUnit: {
    type: String,
    required: true,
    unique: true,
  },

  unitsInStock: {
    type: Number,
    required: true,
    unique: true,
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
