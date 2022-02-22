import routes from '../routes/Services.routes';
 
export default function eventsApi(category, setEventData){
    fetch(routes.GetEvents+"?category="+category).then(response => response.json()).then((data)=>{
        setEventData(data);
    }).catch((error)=>{
        if (error.response) {
            //setApiError(true);
            console.log(error.response.data.message);
            //return error.response.data.message;
        } else if (error.request) {
            //setApiError(true);
        } else {
            //setApiError(true);
        }
    })
}