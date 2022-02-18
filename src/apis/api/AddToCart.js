import routes from '../routes/Services.routes';
import axios from 'axios';

export default function addToCartApi(body, setItemMessage){
    axios.post(routes.AddToCart,body,{
        headers: {
            'token': localStorage.getItem('token')
        },
    }).then(res => {
        setItemMessage(res.data.message);
    }).catch(err => {
        console.log(err);
    })
}