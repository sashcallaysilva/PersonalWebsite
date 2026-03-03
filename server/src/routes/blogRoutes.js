/**
 * Routes in backend, specifically in Next.js, refer to API
 * Routes. These routes let developers define serverless API
 * endpoints that can receive and process incoming HTTP 
 * requests. They are useful for tasks such as logging and 
 * authentication.
 */

import express from "express";
import { getBlogs } from "../controllers/blogController.js";

const router = express.Router();
router.get("/", getBlogs);

export default router;