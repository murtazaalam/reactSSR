import routes from '../routes/Services.routes';
import axios from 'axios';

export default function getAllBlogsApi(setBlogs){
    axios.get(routes.Blogs).then(res => {
        setBlogs(res.data);
    }).catch(error => {
        
        if (error.response) {
            //setApiError(true);
            //console.log(err.response.data.message);
            return error.response.data.message;
        } else if (error.request) {
            //setApiError(true);
        } else {
            //setApiError(true);
        }
    })
}