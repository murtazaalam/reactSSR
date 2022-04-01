import React from "react";
import { useState, useEffect } from "react";
import "./upcomingEvent.css";
import { makeStyles } from "@mui/styles";
import instructor from "../../assets/Svgs/instructor.svg";
import eventSvg from "../../assets/Svgs/singleEvent.svg";
import CheckIcon from "@material-ui/icons/Check";
import BookDemo from "../../components/BookDemo/BookDemo";
import singleEventApi from "../../apis/api/SingleEvent";
import Loading from "../../components/Loader";
import MyCarousel from "../../components/AllEventsContent/MyCarousel";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import ReviewCard from "./ReviewCard";
import ButtonLoader from "../../assets/images/button_loader.gif";
import { toast } from "react-toastify";
import addToCartApi from "../../apis/api/AddToCart";
import getFromCartApi from "../../apis/api/GetFromCart";
import { cartAction } from "../../redux/slices/cart.slice";
import { logoutAction } from "../../redux/slices/auth.slices";
import { useSelector, useDispatch } from "react-redux";
import myOrdersApi from "../../apis/api/MyOders";
import AliceCarousel from "react-alice-carousel";
import ElasticCarousel from "../../components/AllEventsContent/ElasticCarousel";

const responsive = {
  400: { items: 1 },
  539: { items: 2 },
  1023: { items: 3 },
  1280: { items: 4 },
};

const DATA = {
  gradient:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,121,9,1) 0%, rgba(0,212,255,1) 100%)",
  event_image: eventSvg,
  event_name: "Student life", 
  event_subtitle:
    "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
  trainer_image: instructor,
  trainer_name: "Shahid Sidaque",
  trainer_profession: "Professor",
  sneak_peak: [
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
    "Lorem ipsum is a placeholder text",
  ],
};

const useStyles = makeStyles({
  banner: (data) => ({
    background: data.gradient,
  }),
});
function UpcomingEvent() {
  const [event, setEvent] = useState();
  const [videos, setVideoData] = useState();
  const [reviews, setReviewData] = useState();
  const [loader, setLoader] = useState(false);
  const [cartData, setCartData] = useState();
  const [y, setY] = useState([]);
  const [error, setError] = useState("");
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState();
  const [isEventBaught, setIsEventBaught] = useState(false)

  let { isLogin } = useSelector((state) => state.AuthReducer);

  let dispatch = useDispatch();
  const classes = useStyles(DATA);
  let months = ["January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"]
  let first = [1, 21, 31];
  let second = [2, 22]
  let third = [3, 23]
  const params = useParams();
  let id = params.id;
  useEffect(() => {
    if(!event){
      getEvent()
    }
  });

  const getEvent = async() => {
    let data = await singleEventApi(id, setEvent);
    if(isLogin){
      let baughtEventOnly = [];
      let baughtData = await myOrdersApi(setCourse, setLoading, setError);
      if(baughtData){
        baughtEventOnly = baughtData.filter((item) => {
          return item.data.course_type === "event"
        });
      }
      baughtEventOnly.forEach((item) => {
        if(item.data.event_id === data._id) {
          setIsEventBaught(true);
        };
      })
    }
    if(data?.status === "past"){
      let videoData = data.media.map((data, index) => (
        <VideoCard data={data} key={index}></VideoCard>
      ));
      let reviewData = data.review.map((data, index) => (
        <ReviewCard data={data} key={index}></ReviewCard>
      ))
      setVideoData(videoData);
      setReviewData(reviewData);
    }
  }

  const addToCart = async (id) => {
    setLoader(true);
    let body = {
      course_type: "event",
      event_name: event.name,
      event_description: event.description,
      event_image: event.thumbnail,
      event_date: event.startDate,
      price: event.price ? event.price : 0,
      event_id: id,
    };
    let message = await addToCartApi(body, setLoader);
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
    } else if (message === "Item Added") {
      toast.success("Event added to your cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      let data = await getFromCartApi(setCartData, setY, setLoader, setError);
      dispatch(cartAction({ cartCount: data?.length }));
    } else if (message === "Unauthorized") {
      toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoader(false);
      dispatch(logoutAction());
      //navigate("/auth-user");
    } else {
      toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoader(false);
      dispatch(logoutAction());
      //setOpen(true);
    }
  };

  return (
    <>
      {!event ? 
        <Loading/> :
      <div>
        <div className={`${classes.banner} banner`}>
          <div className="eventText">
            <h2 className="trainerHeading">{event.name}</h2>
            <p className="eventTextSubtitle">{event.headline}</p>
          </div>
          <div className="eventSvg">
            <img src={`${event.thumbnail}`} alt="" />
          </div>
        </div>
        <div className="section-spacing-event">
          {event.status === "past" && <h2 className="trainerHeading" style={{marginBottom: '26px',color: '#158515'}}>It was Success</h2>}
          <h2 className="trainerHeading">
            {(new Date(event.endDate) - new Date(event.startDate))/(1000 * 3600 * 24) + 1}{" "} Days Free Seminar
          </h2>
          <p className="eventTextSubtitle">
            Date : {new Date(event.startDate).getDate()-1}
              {first.includes(new Date(event.startDate).getDate()-1) ? "st" :
                (second.includes(new Date(event.startDate).getDate()-1) ? "nd":
                (third.includes(new Date(event.startDate).getDate()-1) ? "rd" : "th" )
                )
              } 
              {" "}To{" "} 
              {new Date(event.endDate).getDate()-1}
              {first.includes(new Date(event.endDate).getDate()-1) ? "st" :
                (second.includes(new Date(event.endDate).getDate()-1) ? "nd":
                (third.includes(new Date(event.endDate).getDate()-1) ? "rd" : "th" )
                )
              }{" "}
              {months[new Date(event.startDate).getMonth()]}{" "} 
              {new Date(event.startDate).getFullYear()} 
          </p>
          <p className="eventTextSubtitle">
            Venue : {event.venue}{" "}
          </p>
          {event.status === "upcoming" && <>
            {!isEventBaught ? (
              <button
                type="button"
                onClick={() => addToCart(event._id)}
                className="btn-grad full-width arrange-loader"
                style={
                  loader
                    ? { backgroundColor: "var(--color-disable)" }
                    : { backgroundColor: "var(--color-secondary)" }
                }
                disabled={loader ? true : false}
              >
                {loader ? <img src={ButtonLoader} width="80" /> : "Add To Cart"}
              </button>
            ) : (
              <button
                type="button"
                className="btn-grad full-width btn-purchased"
              >
                Purchased
              </button>
            )}</>
          }
          {event.status === "live" && <button className="btn-grad full-width" disabled={true}>Join Now</button>}
        </div>
        {event.status === "past" && 
          <div className="map-section" >
            <div className="inner-map-box">
              <h3>{event.hightlights.attendees}+</h3>
              <p>Attenders</p>
            </div>
            <div className="middle-box">
              <h3>{event.hightlights.resources}+</h3>
              <p>Resources</p>
            </div>
            <div className="inner-map-box">
              <h3>{event.hightlights.trainer}</h3>
              <p>Trainer</p>
            </div>
          </div>
        }
        {event.status === "past" && 
          <div className="event-success-story">
            <h2 className="trainerHeading" style={{textAlign: "center"}}>
              Success Stories
            </h2>
            <p style={{textAlign: "center"}}>
              {event.successStory.headline}
            </p>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div className="media-aria">
                {event.successStory.media.map((item, index) => {
                  return (
                    <>
                      {item.mediaType === "image" ? 
                        <div className="event-media">
                          <img src={`${item.mediaUrl}`} className="event-media-image" alt="" />
                        </div>
                      : 
                      <div className="event-media">
                        <iframe
                          src={`${item.mediaUrl}`}
                          className="event-media-video"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      }
                    </>
                  )
                })}
                </div>
              </div>
          </div>
        }
        {event.status !== "past" && <div className="event-section">
          {event.description.map((item, index) => {
            return (
            <p key={index}>
              {item}
            </p>)
          })
          }
        </div>}
        <div className="trainerHighlights">
          <h2 className="trainerHeading margin-top-bottom">
            Highlights about the trainer
          </h2>
          <div className="trainer-list">
            <div className="trainerImageSection">
              <img
                src={`${event.trainer.image}`}
                alt=""
                className="margin-top-botton"
              />
              <h5 className="trainer_name">{event.trainer.name}</h5>
              <p>{event.trainer.profession}</p>
            </div>
            <ul style={{ listStyleType: "none" }} className="list-items-event">
              {event.trainer.description.map((item, index) => {
                return (
                  <li className="list-item-event" key={index}>
                    <CheckIcon />
                      {item}{" "}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        {event.status === "past" && 
          <div className="event-videos-carousel">
            {/* <MyCarousel items={videos} /> */}
            <AliceCarousel
              className="techvanto-student-says-carousel"
              responsive={responsive}
              autoPlayDirection={"rtl"}
              autoPlayStrategy={"none"}
              animationEasingFunction={"ease"}
              autoPlay={false}
              controlsStrategy="alternate"
              infinite={true}
              mouseTracking
              items={videos}
              renderPrevButton={() => {
                return <div className="left-arrow-studentSays">◄</div>;
              }}
              renderNextButton={() => {
                return <div className="right-arrow-studentSays">►</div>;
              }}
            />
            <h2 className="trainerHeading" style={{textAlign: 'center', margin:'44px 0px'}}>What people say about the event ?</h2>
          </div>
        }
        {event.status === "past" && 
          <div className="event-section-reviews">
              {/* <MyCarousel items={reviews} /> */}
              <AliceCarousel
                  className="techvanto-student-says-carousel"
                  responsive={responsive}
                  autoPlayDirection={"rtl"}
                  autoPlayStrategy={"none"}
                  animationEasingFunction={"ease"}
                  autoPlay={false}
                  controlsStrategy="alternate"
                  infinite={true}
                  mouseTracking
                  items={reviews}
                  renderPrevButton={() => {
                    return <div className="left-arrow-studentSays">◄</div>;
                  }}
                  renderNextButton={() => {
                    return <div className="right-arrow-studentSays">►</div>;
                  }}
                />
          </div>
        }
        <div>
          <h2 className="trainerHeading margin-top-bottom center">
            Sneak Peak Of The {event.type}
          </h2>
          <div className="sneakPeakItems">
            {event.type === "wrokshop" && event.sneakPeak.map((item, index) => {
              return(
                <div className="sneakPeakItem">
                  <span className="sneakPeakIndex">{index + 1}</span>
                  <span className="sneakPeakData">{item.title && item.title}</span>
                </div>
              )
            })}
            {event.type === "webinar" && event.sneakPeak.map((item, index) => {
              return(
                <div className="sneakPeakItem">
                  <span className="sneakPeakIndex">{index + 1}</span>
                  <span className="sneakPeakData">{item.title}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-image section-spacing" id="need-assistance">
          <BookDemo />
        </div>
      </div>
    }
    </>
  );
}

export default UpcomingEvent;
