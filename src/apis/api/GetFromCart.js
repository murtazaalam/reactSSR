import routes from '../routes/Services.routes';
import axios from 'axios';

export default function getFromCartApi(setCartData){
    axios.get(routes.GetCartItems, {
        headers: {
            'token': localStorage.getItem('token')
        }
    }).then(res => {
        setCartData(res.data)
    }).catch(err => {
        console.log(err);
    })
}