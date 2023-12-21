import questionModel from "../models/question.js";

const POST_QUESTION = async (req, res) => {
  try {
    const parsedDate = new Date(req.body.date);
    const question = new questionModel({
      title: req.body.title,
      question_text: req.body.question_text,
      date: new Date(),
      // user_id: req.body.user_id,
    });

    const response = await question.save();
    console.log(question);
    return res.status(200).json({ response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Post question error" });
  }
};

const GET_QUESTIONS = async (req, res) => {
  try {
    const questions = await questionModel.find();
    // console.log(questions);
    return res.status(200).json({ questions: questions });
  } catch (err) {
    console.log("Error:", err);
    return res
      .status(500)
      .json({ message: "Error happened getting questions" });
  }
};

const GET_QUESTION_BY_ID = async (req, res) => {
  const question = await questionModel.findOne({ _id: req.params.id });
  console.log("question", question);
  return res.status(200).json({ question: question });
};

const DELETE_QUESTION = async (req, res) => {
  const response = await questionModel.deleteOne({ _id: req.params.id });
  return res.status(200).json({ response: response });
};

export { POST_QUESTION, GET_QUESTIONS, GET_QUESTION_BY_ID, DELETE_QUESTION };
