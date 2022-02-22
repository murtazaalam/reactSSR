import routes from "../routes/Services.routes";
import axios from "axios";

export default function getInterviewQuestionsApi(setQuestionList, setLoader) {
  axios
    .get(routes.InterviewQuestion)
    .then((response) => {
      setQuestionList(response.data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err);
      setLoader(false);
    });
}
