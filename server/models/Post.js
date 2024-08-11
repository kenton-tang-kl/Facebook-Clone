import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  userId: String,
  firstName: String,
  lastName: String,
  userPicturePath: String,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: [commentSchema],
    createdAt: { 
      type: Date, 
      default: Date.now 
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
