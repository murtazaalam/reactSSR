import routes from "../routes/Services.routes";
import axios from "axios";

export default function LoginApi(data, setError, setLoading, setUser) {
  axios
    .post(routes.Login, data)
    .then((res) => {
      setError(res.data.message);
      setUser(true);
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      if (err.response.data.message) return setError(err.response.data.message);
      setError(err.response.data.error[0].msg);
    });
}
