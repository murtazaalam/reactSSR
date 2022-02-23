import routes from "../routes/Services.routes";

export default function AllCourseApi(setAllCourses, setLoading) {
  fetch(routes.GetCourses)
    .then((response) => response.json())
    .then((data) => {
      setAllCourses(data);
      setLoading(false);
    })
    .catch((error) => {
      if (error.response) {
        setLoading(true)
      } else if (error.request) {
        setLoading(true)
      } else {
        setLoading(true)
      }
    });
}
