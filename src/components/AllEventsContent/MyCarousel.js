import React from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";

const MyCarousel = ({items, leftArrow, rightArrow}) => {
    //const [arrow, setArrow] = useState(true);
    let arrow = false;
    const responsive = {
        400: { items: 1 },
        500: { items: 2 },
        768: { items: 3 },
        1024: { items: 4 },
        1300: { items: 3 },
        1400: { items: 4 },
        1750: { items: 5 }
      };
    if(window.innerWidth <= 400){
        if(items?.length === 1){
            arrow = false;
        }else{
            arrow = true;
        }
    }
    if(window.innerWidth > 400 && window.innerWidth <= 500){
        if(items?.length < 3){
            arrow = false;
        }else{
            arrow = true;
        }
    }
    if(window.innerWidth > 500 && window.innerWidth <= 768){
        if(items?.length < 4){
            arrow = false;
        }else{
            arrow = true;
        }
    }
    if(window.innerWidth > 768){
        if(items?.length < 5){
            arrow = false;
        }else{
            arrow = true;
        }
        
    }
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
                    infinite={arrow}
                    mouseTracking
                    items={items}
                    disableButtonsControls={ !arrow }
                    isPrevSlideDisabled={ arrow }
                    renderPrevButton={arrow ? () => {
                        return ( 
                        <div className={`left-arrow-studentSays ${leftArrow}`}>◄</div>
                        )
                    } : {arrow}}
                    renderNextButton={arrow ? () => {
                        return <div className={`right-arrow-studentSays ${rightArrow}`}>►</div>;
                    }: <></>}
                    />
            </div>
        </>
    )
}
export default MyCarousel