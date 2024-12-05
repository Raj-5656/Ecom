import React, { useEffect, useState } from "react";
import "./Carousel.css"

function Carousel({ data }) {
    const [slide,setSlide]=useState(0)
    const prevSlide=()=>{
        setSlide(slide===0?data.length-1:slide-1)
    }
    const nextSlide=()=>{
        setSlide(slide===data.length-1?0:slide+1)
    }
    useEffect(()=>{
      const interval=setInterval(()=>{
        nextSlide()
      },3000)
      return ()=> clearInterval(interval)
    },[slide])
  return (
    <div className="d-flex m-3" style={{ position: "relative" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="white"
        class="bi bi-arrow-left-circle"
        viewBox="0 0 16 16"
        className="arrow arrow-left"
        style={{ position: "absolute", left:"1rem",top:"40%"}}
        onClick={prevSlide}
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
        />
      </svg>
      {data.map((item, index) => {
        return (
          <img
            className={slide===index?"slide":"slide-hidden"}
            src={item.src}
            key={index}
            alt={item.alt}
            
          />
        );
      })}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="white"
        class="bi bi-arrow-right-circle"
        viewBox="0 0 16 16"
        className="arrow arrow-right"
        onClick={nextSlide}
        style={{position:"absolute",right:"1rem",top:"40%"}}
      >
        <path
          fill-rule="evenodd"
          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
        />
      </svg>
    </div>
  );
}

export default Carousel;
