import routes from "../routes/Services.routes";
import axios from "axios";

export default function getAllBlogsApi(setBlogs, setLoader) {
  axios
    .get(routes.Blogs)
    .then((res) => {
      setBlogs(res.data);
      setLoader(false);
    })
    .catch((err) => {
      console.log(err.response.data.message);
      setLoader(false);
    });
}
