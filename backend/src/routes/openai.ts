import {
  getConversationItems,
  createConversation,
  createResponse,
} from "../controllers/openai";
import { validateId, validateResponse } from "../middlewares/validation";
import { Router } from "express";

const router = Router();

router.post("/conversation", createConversation);
router.get("/conversation", validateId, getConversationItems);

router.post("/response", validateResponse, createResponse);

export default router;
