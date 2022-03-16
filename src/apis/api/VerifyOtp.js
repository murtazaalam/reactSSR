import routes from "../routes/Services.routes";
import axios from "axios";

export default async function LoginApi(data, setError, setOTP, setLoader) {
  return await axios
    .post(routes.OtpVerify, data)
    .then((res) => {
      setError(res.data.message);
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
      }
      setLoader(false);
      return res.data;
    })
    .catch((error) => {
      //   console.log(error.response);
      if (error.response.status === 404) {
        console.log(error.response);
        setError(error.response.data.message);
      }
    });
}
