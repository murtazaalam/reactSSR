import routes from '../routes/Services.routes';
import axios from 'axios';

export default async function RegisterApi(body, setError, setLoader){
    console.log("body", body);
    try{
    await axios.post(routes.SignUp, body, {
        headers: {
            'Content-Type': 'application/json'
            }
    }).then((res) => {
        setLoader(false);
        console.log("res",res);
    }).catch((error) => {
        console.log("error",error);
        if (error.response.data) {

            setLoader(false);
            if(error.response.data.message) return setError(error.response.data.message);
            setError(error.response.data.error[0].msg);
        } else if (error.request) {
        //setApiError(true);
            setLoader(false);
        } else {
        //setApiError(true);
            setLoader(false);
        }
    })
    }catch(err){
        console.log(">>>", err);
    }
}
