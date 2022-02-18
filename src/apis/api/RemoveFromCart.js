import routes from '../routes/Services.routes';
import axios from 'axios';

export default function removeItemFromCart(id, setDeleteMessage){
    axios.delete(routes.RemoveFromCart+id,{
        headers: {
            'token': localStorage.getItem('token')
        }
    }).then(res => {
        setDeleteMessage(res.data.deletedCount);
    }).catch(err => {
        console.log(err);
    })
}