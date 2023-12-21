// answer: id, answer_text, date, gained_likes_number, question_id
import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
  answer_text: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  gained_likes_number: { type: Number, default: 0, required: true },
  question_id: { type: String, required: true },
});

export default mongoose.model("Answer", answerSchema);
