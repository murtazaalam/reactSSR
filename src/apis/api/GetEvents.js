import routes from "../routes/Services.routes";

export default async function eventsApi(
  category,
  setEventData,
  setLoading,
  setError
) {
  return fetch(routes.GetEvents + "?category=" + category)
    .then((response) => response.json())
    .then((data) => {
      setEventData(data);
      console.log("data",data);
      setLoading(false);
      return data
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      setError(error);
      if (error.response) {
        //setApiError(true);
        console.log(error.response.data.message);
        //return error.response.data.message;
      } else if (error.request) {
        //setApiError(true);
      } else {
        //setApiError(true);
      }
    });
}
