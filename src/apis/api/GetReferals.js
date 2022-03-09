import routes from "../routes/Services.routes";
import axios from "axios";

export default async function getAllReferals(setReferals, setLoader){
    return await axios.get(routes.GetReferals).then(res => {
        setReferals(res.data);
        setLoader(false)
        return res.data;
    }).catch(error => {
        if (error.response) {
            //setApiError(true);
            //console.log(err.response.data.message);
            setLoader(false)
            return error.response.data.message;
        } else if (error.request) {
            setLoader(false)
            //setApiError(true);
        } else {
            //setApiError(true);
            setLoader(false)
        }
    })
}
