import routes from "../routes/Services.routes";
import axios from "axios";

export default async function getFromCartApi(setCartData, isUser) {
  await axios
    .get(routes.GetCartItems, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setCartData(res.data);
      return res.data;
    })
    .catch((error) => {
      if (error.response) {
        //setApiError(true);
        isUser(error.response.data.message)
        //return error.response.data.message;
      } else if (error.request) {
        //setApiError(true);
      } else {
        //setApiError(true);
      }
    });
}
