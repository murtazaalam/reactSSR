import routes from '../routes/Services.routes';
import axios from 'axios';

export default function getInterviewQuestionsApi(setQuestionList){
    axios.get(routes.InterviewQuestion).then(response => {
        setQuestionList(response.data)
    }).catch(err => {
        console.log(err);
    })
}