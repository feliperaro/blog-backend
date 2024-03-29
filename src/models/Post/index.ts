import { Schema, model } from "mongoose";

type Tag = {
  label: string;
};

export interface IPost {
  _id: Schema.Types.ObjectId;
  title: string;
  content: string;
  category?: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String },
  tags: { type: [String] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default model<IPost>("Post", postSchema);
