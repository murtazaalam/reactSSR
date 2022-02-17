import routes from '../routes/Services.routes';
import axios from 'axios';

export default function RegisterApi(body, setError, setLoading){
    console.log(">>",body);
    axios.post(routes.SignUp, body, {
        headers: {
            'Content-Type': 'application/json'
            },
    }).then((res) => {
        console.log("error")
        console.log(res.data.messgae)
        //setError(res.data);
    }).catch((err) => {
        if(err.response.data.message) return setError(err.response.data.message);
        setError(err.response.data.error[0].msg);
    })
}
