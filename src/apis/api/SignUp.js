import routes from "../routes/Services.routes";
import axios from "axios";

export default async function RegisterApi(body, setError, setLoader) {
  await axios
    .post(routes.SignUp, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("Sddsd");
      setLoader(false);
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
      if (error.response.data) {
        setLoader(false);
        if (error.response.data.message)
          return setError(error.response.data.message);
        setError(error.response.data.error[0].msg);
      } else if (error.request) {
        //setApiError(true);
        setLoader(false);
      } else {
        //setApiError(true);
        setLoader(false);
      }
    });
}
