import routes from '../routes/Services.routes';
import axios from 'axios';

export default function addToCartApi(body, setItemMessage){
    console.log(body);
    axios.get(routes.AddToCart,body,{
        headers: {
            'token': localStorage.getItem('token')
            },
    }).then(res => {
        setItemMessage(res);
    }).catch(err => {
        console.log(err);
    })
}