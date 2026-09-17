import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  post: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  content: string;
  status: "Pending" | "Approved" | "Rejected" | "Spam";
}

const CommentSchema = new Schema<IComment>(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Spam"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Comment ||
  mongoose.model<IComment>("Comment", CommentSchema);