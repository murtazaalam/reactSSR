import routes from '../routes/Services.routes';
import axios from 'axios';

export default async function getInterviewQuestionsApi(setQuestionList){
    await axios.get(routes.InterviewQuestion).then(response => {
        setQuestionList(response.data)
    }).catch(error => {
        if (error.response) {
            //setApiError(true);
            //console.log(err.response.data.message);
            //return error.response.data.message;
          } else if (error.request) {
            //setApiError(true);
          } else {
            //setApiError(true);
          }
    })
}