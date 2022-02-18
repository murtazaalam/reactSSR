import routes from '../routes/Services.routes';
import axios from 'axios';

export default async function addOrderApi(body){
    return axios.post(routes.AddOrder,body,{
        headers: {
            'token': localStorage.getItem('token')
        },
    }).then(res => {
        return res.data.response;
    }).catch(err => {
        console.log(err.response.data.message);
    })
}