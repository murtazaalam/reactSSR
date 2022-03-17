import React from "react";

const VideoCard = ({data}) => {
    return (
        <>
            <iframe
                src={`${data}`}
                className="event-media-image"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </>
    )
}
export default VideoCard;