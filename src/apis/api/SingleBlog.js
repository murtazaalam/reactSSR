import routes from '../routes/Services.routes';
import axios from 'axios';

export default function getSingleBlogApi(id, setBlogItem){
    axios.get(`${routes.Blogs}/${id}`).then(res => {
        setBlogItem(res.data[0]);
    }).catch(err => {
        console.log(err.response.data.message);
    })
}