import routes from "../routes/Services.routes";

export default async function AllCourseApi(setAllCourses, setLoading, setApiError) {
  console.log("coming");
  await fetch(routes.GetCourses)
    .then((response) => response.json())
    .then((data) => {
      setAllCourses(data);
      setLoading(false);
    })
    .catch((error) => {
      if (error.response) {
        setApiError(true)
      } else if (error.request) {
        setApiError(true)
      } else {
        setApiError(true)
      }
    });
}
