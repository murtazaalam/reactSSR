import routes from "../routes/Services.routes";
import axios from "axios";

export default async function ResendApi(data, setLoader) {
  return await axios
    .post(routes.updatePassword, data)
    .then((res) => {
      // setError(res.data.message);
      console.log(res);
      setLoader(false);
      return res;
    })
    .catch((error) => {
      setLoader(false);
      console.log(error.response);
      return error.response;
    });
}
