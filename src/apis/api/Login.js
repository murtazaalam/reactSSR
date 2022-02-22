import routes from "../routes/Services.routes";
import axios from "axios";

export default async function LoginApi(data, setError, setLoading) {
  return await axios
    .post(routes.Login, data)
    .then((res) => {
      setError(res.data.message);
      localStorage.setItem("token", res.data.token);
      return res.data.message;
    })
    .catch((err) => {
      if (err.response.data.message) return setError(err.response.data.message);
      setError(err.response.data.error[0].msg);
    });
}
