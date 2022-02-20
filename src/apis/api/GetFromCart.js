import routes from "../routes/Services.routes";
import axios from "axios";

export default async function getFromCartApi(setCartData) {
  return await axios
    .get(routes.GetCartItems, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      setCartData(res.data);

      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
