import express from "express";
import {
  GET_ANSWERS_BY_QUESTION_ID,
  POST_ANSWER_TO_QUESTION,
  DELETE_ANSWER,
} from "../controllers/answers.js";

const router = express.Router();

router.get("/questions/:id/answers", GET_ANSWERS_BY_QUESTION_ID);
router.post("/question/:id/answers", POST_ANSWER_TO_QUESTION);
router.delete("/answer/:id", DELETE_ANSWER);

export default router;
