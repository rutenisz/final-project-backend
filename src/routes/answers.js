import express from "express";
import {
  GET_ANSWERS_BY_QUESTION_ID,
  POST_ANSWER_TO_QUESTION,
  DELETE_ANSWER,
} from "../controllers/answers.js";
import auth from "../middleware/auth.js";

const router = express.Router(); // sukuriu nauja routerio objekta

router.get("/questions/:id/answers", GET_ANSWERS_BY_QUESTION_ID);
router.post("/question/:id/answers", auth, POST_ANSWER_TO_QUESTION);
router.delete("/answer/:id", auth, DELETE_ANSWER);

export default router;
