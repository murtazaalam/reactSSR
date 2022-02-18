import routes from '../routes/Services.routes';
import axios from 'axios';

export default function orderNowApi(data, setError, setLoading){
    //console.log("order");
    axios.post(routes.OrderTest, data).then((res) => {
        console.log(res);
        //setError(res.data.message);
    }).catch((err) => {
        if(err.response.data.message) return setError(err.response.data.message);
        setError(err.response.data.error[0].msg);
    })
}
