import routes from "../routes/Services.routes";
import axios from "axios";

export default async function LoginApi(data, setError, setOTP, setLoader) {
  return await axios
    .post(routes.Login, data)
    .then((res) => {
      setError(res.data.message);
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
      }
      setLoader(false);
      return res;
    })
    .catch((error) => {
      console.log(error.response);
      setLoader(false);
      if (error.response) {
        console.log(error.response);
        if (error.response.data.message) {
          setError(error.response.data.message);
          setOTP(error.response.data.otp);
        }
        // if (error.response.data.error[0].msg)
        //   return setError(error.response.data.error[0].msg);
      }
      // else if (error.request) {
      //   //setApiError(true);
      // } else {
      //   //setApiError(true);
      // }
      return error.response;
    });
}
