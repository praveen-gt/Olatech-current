import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = ({ images }:any) => {
  const settings = {
    dots: false,
    speed: 9000, 
    autoplay: true, 
    autoplaySpeed: 0, 
    cssEase: 'linear', 
    slidesToShow: 4, 
    slidesToScroll: 1, 
    ltr: true
    // variableWidth: true,

    // dots: false,
    // infinite: true,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 8000,
    // pauseOnHover: false,
    // cssEase: 'linear',
    // autoplaySpeed: 2000
    // // cssEase: 'linear'
  };

  return (
    <div className="container-fluid">
      {/* <div className="tag">
        <h1>Image Gallery</h1>
      </div> */}
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item:any) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} className="sliderImg"/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;