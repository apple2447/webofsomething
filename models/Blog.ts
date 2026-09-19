import mongoose from "mongoose";

const blogschema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    content: String,
  },
  { timestamps: true }
);

export default mongoose.models.blogs || 
mongoose.model("blogs", blogschema);