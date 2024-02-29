import { Router } from "express";
import {
  createPost,
  deletePostById,
  editPostById,
  getAllPosts,
  getPostById,
} from "../../controllers/Post";

const router: Router = Router();

router.delete("/:post_id", deletePostById);
router.get("/", getAllPosts);
router.get("/:post_id", getPostById);
router.post("/", createPost);
router.put("/:post_id", editPostById);

export default router;
