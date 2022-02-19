import routes from '../routes/Services.routes';
import axios from 'axios';

export default function myOrdersApi(setCourse){
    axios.get(routes.MyOrder,{
        headers:{
            'token': localStorage.getItem('token')
        }
    }).then((response) => {
        setCourse(response.data);
    }).catch((err) => {
        console.log(err)
    })
}