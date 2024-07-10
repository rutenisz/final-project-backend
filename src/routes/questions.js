import express from "express";
import {
  GET_QUESTIONS,
  GET_QUESTION_BY_ID,
  POST_QUESTION,
  DELETE_QUESTION,
} from "../controllers/questions.js";
import auth from "../middleware/auth.js";

const router = express.Router(); // sukuriu nauja routerio objekta

router.get("/questions", GET_QUESTIONS);
router.get("/questions/:id", auth, GET_QUESTION_BY_ID);
router.post("/questions", auth, POST_QUESTION);
router.delete("/questions/:id", auth, DELETE_QUESTION);

export default router;
