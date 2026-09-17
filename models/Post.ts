import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      content: {
        type: String,
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },

      status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected", "Spam"],
        default: "Pending",
      },
    },
  ],
});

export default mongoose.models.Post ||
  mongoose.model("Post", PostSchema);