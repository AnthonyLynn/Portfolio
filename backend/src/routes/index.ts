import NotFoundError from "../errors/not-found-err.ts";

import openaiRouter from "./openai.ts";
import { type NextFunction, Router } from "express";

const router = Router();

router.use("/openai", openaiRouter);

router.use((_, __, next: NextFunction) => {
  next(new NotFoundError("The page doesn't exist"));
});

export default router;
