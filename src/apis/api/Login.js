import routes from "../routes/Services.routes";
import axios from "axios";

export default async function LoginApi(data, setError, setLoader) {
  return await axios
    .post(routes.Login, data)
    .then((res) => {
      setError(res.data.message);
      localStorage.setItem("token", res.data.token);
      setLoader(false);
      return res.data.message;
    })
    .catch((error) => {
      setLoader(false);
      if (error.response.data) {
        if (error.response.data.message)
          return setError(error.response.data.message);
        if (error.response.data.error[0].msg)
          return setError(error.response.data.error[0].msg);
      } else if (error.request) {
        //setApiError(true);
      } else {
        //setApiError(true);
      }
    });
}
