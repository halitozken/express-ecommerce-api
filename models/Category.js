import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  id: {
    type: String,
  },

  categoryName: {
    type: String,
  },

  seoUrl: {
    type: String,
  },
});

export default mongoose.model("Category", CategorySchema);

