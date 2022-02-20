import routes from '../routes/Services.routes';
import axios from 'axios';

export default function verifyOrderApi(body, setPaymentMessage){
    axios.post(routes.OrderVerify,body,{
        headers: {
            'token': localStorage.getItem('token')
        },
    }).then(res => {
        setPaymentMessage(res.data.message);
    }).catch(err => {
        console.log(err.response.data.message);
    })
}