import routes from '../routes/Services.routes';
 
export default function AllCoursesApi(setAllCourses,setAllSubCategory,setLoading){
    fetch(routes.AllCourses).then(response => response.json()).then((data)=>{
        setAllCourses(data['services']);
        setAllSubCategory(data['subcategory'])
        setLoading(false);
    })
}