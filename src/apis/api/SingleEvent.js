import routes from '../routes/Services.routes';
 
export default function singleEventApi(eventId, setEventData){

    fetch(routes.GetEvents+"/"+eventId).then(response => response.json()).then((data)=>{
        setEventData(data[0]);
    })
}