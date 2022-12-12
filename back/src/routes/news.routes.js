import { Router } from "express";

import { create, findAll, topNews, findById, searchByTitle, byUser, updateNews, eraseNews, likeNews } from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/search", searchByTitle);
router.get("/byUser", authMiddleware, byUser);

router.get("/:id", authMiddleware, findById);

router.patch("/:id", authMiddleware, updateNews);

router.delete("/:id", authMiddleware, eraseNews);

router.patch("/like/:id", authMiddleware, likeNews);

export default router