import routes from "../routes/Services.routes";
import axios from "axios";

export default async function myOrdersApi(setCourse, setLoading, setError) {
  return await axios
    .get(routes.MyOrder, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      setCourse(response.data);
      setLoading(false);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);

      setLoading(false);
      if(err.response) setError(err.response.data.message);
      
    });
}
