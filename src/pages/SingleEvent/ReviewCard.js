import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
const ReviewCard = ({data}) => {
    const classes = useStyles();
    return (
        <>
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
        </>
    )
}
export default ReviewCard;