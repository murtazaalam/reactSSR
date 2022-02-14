import routes from '../routes/Services.routes';
 
export default function eventsApi(category, setEventData){
    fetch(routes.GetEvents+"?category="+category).then(response => response.json()).then((data)=>{
        setEventData(data);
    })
}