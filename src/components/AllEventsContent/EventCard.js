import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import './allEventsContent.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import addToCartApi from "../../apis/api/AddToCart";
import getFromCartApi from "../../apis/api/GetFromCart";
import { cartAction } from "../../redux/slices/cart.slice";
import { logoutAction } from "../../redux/slices/auth.slices";

const useStyles = makeStyles(theme => ({
    
}))
function EventCard({data}) {
    const classes = useStyles();
    const [cartLoader, setCartLoader] = useState();
    const [cartData, setCartData] = useState();
    const [y, setY] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");
    let eventDate = new Date(data.startDate);
    let Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    let dispatch = useDispatch();

    const addToCart = async (id) => {
        setCartLoader(true);
        console.log("hi data",data,id)
        // const singleEvent = data.filter((item) => {
        //   return item._id === id;
        // });
        // console.log(">>>>",singleEvent)
        let body = {
          course_type: "event",
          event_name: data.name,
          event_description: data.description,
          event_image: data.thumbnail,
          event_date: data.startDate,
          price: data.price ? data.price : null,
          event_id: id,
        };
        let message = await addToCartApi(body, setCartLoader);
        if (message === "Item Already Added") {
          toast.warn("Event already added ", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } 
         else if (message === "Item Added") {
          toast.success("Event added to your cart", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          let data = await getFromCartApi(setCartData, setY, setLoading, setError);
          dispatch(cartAction({ cartCount: data?.length }));
        } 
        else if (message === "Unauthorized") {
          toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setCartLoader(false);
          dispatch(logoutAction());
          //navigate("/auth-user");
        } 
        else {
          toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setCartLoader(false);
          dispatch(logoutAction());
          //setOpen(true);
        }
      };

    return (
        <div className="event-card-container">
            <Link to={`/event/${data._id}`}>
              <div className="event-card-header" style={{background: `linear-gradient(${data.gradient})`}}>
                  <img src={`${data.thumbnail}`} width="120" alt="event-thumbnail"/>
              </div>
            </Link>
            <div className="event-card-content">
                <div className="event-card-body">
                    <h6>{data.type}</h6>
                    <div className="event-card-highlights">
                        <div className="event-card-date">
                            <span>{eventDate.getDate() < 10 ? `0${eventDate.getDate()-1}` : eventDate.getDate()-1}</span>
                            <span>{Months[eventDate.getMonth()]}</span>
                        </div>
                        <div>
                            <Link to={`/event/${data._id}`} style={{textDecoration: 'none', color: '#000'}}>
                                <h2>{data.name}</h2>
                            </Link>
                            {data.status === "past" && 
                            <span>5000 attenders</span>}
                        </div>
                    </div>
                </div>
                <div className="event-card-footer">
                    <div className="event-card-venue">{data.venue}</div>
                    <div style={{textAlign: "right"}}>
                        {data.status === "live" &&
                        <button className="event-card-btn" disabled={true}>Join Now</button>}
                        {data.status === "past" &&
                        <button className="event-card-btn">See Details</button>}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      
                      {data.status === "upcoming" &&
                        <>
                          <div style={{color: '#11998e',fontWeight: '600'}}>{data.price > 0 ? `Rs. ${data.price}/-`: 'Free'}</div>
                          {!data.isBaught  ? <button 
                            className="event-card-btn" 
                            onClick={() => addToCart(data._id)}
                            disabled={cartLoader}
                            >
                                Add To Cart
                            </button> : 
                              <button 
                              className="event-card-btn" 
                              style={{background: "var(--color-secondary)"}}
                              disabled={true}
                              >
                                  Purchased
                              </button>
                            }
                          </>
                      }
                      </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
