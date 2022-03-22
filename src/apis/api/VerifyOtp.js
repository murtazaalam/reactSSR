import routes from "../routes/Services.routes";
import axios from "axios";

export default async function VerifyOtp(data, setError, setLoader) {
  return await axios
    .post(routes.OtpVerify, data)
    .then((res) => {
      // setError(res.data.message);
      console.log(res);
      localStorage.setItem("token", res.data.token);
      setLoader(false);
      return res;
    })
    .catch((error) => {
      console.log(error.response);
      setLoader(false);
      if (error.response.status === 400) {
        console.log(error.response);
        setError(error.response.data.message);
      }
      return error.response;
    });
}
