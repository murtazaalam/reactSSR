import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleEvent } from "../../components";
import singleEventApi from "../../apis/api/SingleEvent";
import myOrdersApi from "../../apis/api/MyOders";
import { useSelector } from "react-redux";

const EventDetail = () => {
  const [event, getEvent] = useState();
  const [loading, setLoading] = useState();
  const [baughtEvent, setCourse] = useState([]);
  const [error, setError] = useState();
  const params = useParams();

  let { admin, isLogin } = useSelector((state) => state.AuthReducer);
  let baughtEventOnly = [];
  let isBaught = [];

  const fetchData = async () => {
    if (!event) {
      singleEventApi(params.id, getEvent);
    }
    if (isLogin) {
      let baughtData = await myOrdersApi(setCourse, setLoading, setError);
      if (baughtData) {
        baughtEventOnly = baughtData.filter((item) => {
          return item.data.course_type === "event";
        });
        setCourse(baughtEventOnly);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (baughtEvent.length > 0 && event) {
    isBaught = baughtEvent.filter((item) => {
      return item.data.event_id === event._id;
    });
  }
  return (
    <>
      <SingleEvent
        event={event}
        isEventBaught={isBaught.length > 0 ? true : false}
      />
    </>
  );
};
export default EventDetail;
