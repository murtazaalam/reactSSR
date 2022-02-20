import routes from '../routes/Services.routes';
import axios from 'axios';

export default function getAllBlogsApi(setBlogs){
    axios.get(routes.Blogs).then(res => {
        setBlogs(res.data);
    }).catch(err => {
        console.log(err.response.data.message);
    })
}