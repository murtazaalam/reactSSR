import routes from "../routes/Services.routes";
import axios from "axios";

export default async function addToCartApi(body, setItemMessage) {
  return await axios
    .post(routes.AddToCart, body, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setItemMessage(res.data.message);
      return res.data.message;
    })
    .catch((err) => {
      setItemMessage(err.response.data.message);
      return err.response.data.message;
    });
}
