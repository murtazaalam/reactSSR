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
    }).catch((err) => {
        if(err.response.data.message) return setMessage(err.response.data.message);
        setMessage(err.response.data.error[0].msg);
        setLoader(false);
    })
}