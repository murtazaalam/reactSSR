import React from "react";
import AliceCarousel from "react-alice-carousel";

const responsive = {
    400: { items: 1 },
    500: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
    1300: { items: 3 },
    1400: { items: 4 },
    1750: { items: 5 }
  };

const MyCarousel = ({items, leftArrow, rightArrow}) => {
    return (
        <>
            <div className="event-carousel">
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
                    items={items}
                    renderPrevButton={() => {
                        return <div className={`left-arrow-studentSays ${leftArrow}`}>◄</div>;
                    }}
                    renderNextButton={() => {
                        return <div className={`right-arrow-studentSays ${rightArrow}`}>►</div>;
                    }}
                    />
            </div>
        </>
    )
}
export default MyCarousel