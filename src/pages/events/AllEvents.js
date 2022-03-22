import Box from "@mui/material/Box";
import AllEventsContent from '../../components/AllEventsContent/AllEventsContent'

const AllEvents = () => {
    
    return (
        <>
           <Box
                component="section"
                className="page-heading course-mobile-view"
                sx={{
                // background: `url(https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Events.jpg)`,
                background: `#1C477C url(${
                    window.matchMedia("(max-width: 668px)").matches
                    ? ""
                    : "https://tv-academy-assets.s3.eu-west-2.amazonaws.com/Events.jpg"
                }) 0 0 no-repeat`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                }}
            >
                <div className="course-container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item active">
                        <p className="home">
                        Home
                        <div className="line"></div>
                        </p>
                    </li>
                    <li className="breadcrumb-item active">Events</li>
                    </ol>
                </nav>
                <h1 className="event-heading">Events</h1>
                </div>
            </Box>
            <AllEventsContent/>
            
        </>
    )
}
export default AllEvents;