import {
  getConversationItems,
  createConversation,
  createResponse,
} from "../controllers/openai";
import { validateId, validateResponse } from "../middlewares/validation";
import { Router } from "express";

const router = Router();

router.post("/conversation", createConversation);
router.post("/response", validateResponse, createResponse);
router.get("/conversation/:conversationId", validateId, getConversationItems);

export default router;
