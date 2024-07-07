import express from 'express';
import { protectedRoute } from '../Middleware/protectedRoute.js';
import { createPost, deletePost ,commentPost,likeUnlikePost,getAllPosts,getFollowing} from '../controllers/postsController.js';

//Create router
const router = express.Router()

router.post("/create",protectedRoute,createPost,createPost)
router.post("/like/:id",protectedRoute,likeUnlikePost)
router.post("/comment/:id",protectedRoute,commentPost)
 router.delete("/delete/:id",protectedRoute,deletePost)
 router.get("/getAll",protectedRoute,getAllPosts)
 router.get("/following",protectedRoute,getFollowing)


export  {router as postRoutes}
