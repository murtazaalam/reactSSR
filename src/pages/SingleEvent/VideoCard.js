import React from "react";

const VideoCard = ({data}) => {
    return (
        <>
            <div style={{margin: '10px'}}>
                <iframe
                    src={`${data}`}
                    style={{width: '100%'}}
                    className="event-media-videos"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </>
    )
}
export default VideoCard;