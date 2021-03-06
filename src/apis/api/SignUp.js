import routes from "../routes/Services.routes";
import axios from "axios";

export default async function RegisterApi(body, setError, setLoader, setOtp) {
  return await axios
    .post(routes.SignUp, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setLoader(false);
      console.log(res.data.otp);
      setOtp(res.data.otp);
      // localStorage.setItem("token", res.data.token);
      console.log(res);
      return res;
    })
    .catch((error) => {
      if (error.response.data) {
        setLoader(false);
        if (error.response.data.message) setError(error.response.data.message);
        return error.response;
      } else if (error.request) {
        //setApiError(true);
        setLoader(false);
      } else {
        //setApiError(true);
        setLoader(false);
      }
    });
}
