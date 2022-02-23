import routes from '../routes/Services.routes';
import axios from 'axios';

export default function sendQueryApi(body, setMessage, setLoader){
    axios.post(routes.SendQuery, body,{
        headers:{
            'token':localStorage.getItem('token') ? localStorage.getItem('token') : ''
        }
    }).then((res) => {
        setMessage(res.data.message);
        setLoader(false);
    }).catch((error) => {
        if (error.response.data) {
            setLoader(false);
            if(error.response.data.message) return setMessage(error.response.data.message);
            setMessage(error.response.data.error[0].msg);
        } else if (error.request) {
        //setApiError(true);
            setLoader(false);
        } else {
        //setApiError(true);
            setLoader(false);
        }
        
    })
}