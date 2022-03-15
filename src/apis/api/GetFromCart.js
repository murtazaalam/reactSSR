import routes from "../routes/Services.routes";
import axios from "axios";

export default async function getFromCartApi(
  setCartItems,
  setY,
  setLoading,
  setError
) {
  return axios
    .get(routes.GetCartItems, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      let data = res.data;
      let x = data.map((item, index) => {
        return {id:index, isChecked: true, item_id:item._id, item_type:item.course_type, data:item, registrationType:"full"}
      })
      setY(x);
      setCartItems(res.data);
      setLoading(false);
      return res.data;
    })
    .catch((err) => {
      // console.log(err);
      // console.log(err.message);
      setLoading(false);
      setError(err.message);
    });
}
