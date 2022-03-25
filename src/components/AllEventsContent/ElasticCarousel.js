import React from 'react';
import Carousel from 'react-elastic-carousel';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    container:{
        padding: '10px',
        boxShadow: 'rgb(0 0 0 / 35%) 0px 5px 15px',
        margin: '28px',
        borderRadius: '10px'
    },
    image:{
        width: '138px',
        borderRadius: '50%',
        height: '138px'
    },
    name:{ 
        fontWeight: 600,
        margin: '20px 0'
    }
}))

const responsive = [
    {width: 1, itemsToShow: 1},
    {width: 400, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},

]
const ElasticCarousel = ({items}) => {
    //let eventDate = new Date(data.startDate);
    let Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const classes = useStyles();
    return (
        <>
            {items && <Carousel breakPoints={responsive}>
                {items.map((data) =>(
                    <div className={`review-card-container ${classes.container}`}>
                        <div>
                            <img src={`${data.image}`} className={classes.image}/>
                        </div>
                        <div>
                            <h4 className={classes.name}>{data.name}</h4>
                            {/* <p>{data.education}</p> */}
                        </div>
                        <div>
                            <d>{data.description}</d>
                        </div>
                    </div>
                ))}
            </Carousel>}
        </>
    )
}
export default ElasticCarousel;