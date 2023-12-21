import answerModel from "../models/answer.js";
import questionModel from "../models/question.js";

const GET_ANSWERS_BY_QUESTION_ID = async (req, res) => {
  try {
    const questions = await questionModel.findOne({ _id: req.params.id });
    const answers = await answerModel.find({ question_id: req.params.id });

    const question_with_answers = {
      questions: questions,
      answers: answers,
    };
    return res
      .status(200)
      .json({ question_with_answers: question_with_answers });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Error happened getting answers" });
  }
};

const POST_ANSWER_TO_QUESTION = async (req, res) => {
  try {
    const parsedDate = new Date(req.body.date);
    const answer = new answerModel({
      question_id: req.body.question_id,
      answer_text: req.body.answer_text,
      date: parsedDate,
      gained_likes_number: req.body.gained_likes_number,
    });

    const response = await answer.save();
    console.log(answer);
    return res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ "Post error:": err });
  }
};

const DELETE_ANSWER = async (req, res) => {
  const response = await answerModel.deleteOne({ _id: req.params.id });
  return res.status(200).json({ response: response });
};

export { GET_ANSWERS_BY_QUESTION_ID, POST_ANSWER_TO_QUESTION, DELETE_ANSWER };
