import routes from "../routes/Services.routes";

export default function AllCourseApi(setAllCourses, setLoading) {
  fetch(routes.GetCourses)
    .then((response) => response.json())
    .then((data) => {
      setAllCourses(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setAllCourses({});
      setLoading(false);
    });
}
