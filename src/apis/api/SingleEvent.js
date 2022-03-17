import routes from '../routes/Services.routes';
 
export default async function singleEventApi(eventId, setEventData){
    return await fetch(routes.GetEvents+"/"+eventId).then(response => response.json()).then((data)=>{
        setEventData(data);
        return data;
    }).catch(error =>{
        if (error.response) {
            ////setApiError(true);
        } else if (error.request) {
        //setApiError(true);
            //setLoader(false);
        } else {
        //setApiError(true);
            //setLoader(false);
        }
    })
}