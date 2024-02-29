import { Request, Response } from "express";
import Post, { IPost } from "../../models/Post";
import mongoose from "mongoose";

const handleErrors = (err: any, res: Response) => {
  console.error("error", err.message, err.stack);
  res.status(500).json({ message: "Server error" });
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost: IPost = req.body;
    const createdPost = new Post(newPost);
    const savedPost = await createdPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    handleErrors(error, res);
  }
};

export const deletePostById = async (req: Request, res: Response) => {
  try {
    const { post_id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(post_id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const deletedPost = await Post.findByIdAndDelete(post_id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    handleErrors(err, res);
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const { post_id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(post_id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    const post = await Post.findById(post_id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    handleErrors(err, res);
  }
};

export const getAllPosts = async (_: Request, res: Response) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    handleErrors(err, res);
  }
};
