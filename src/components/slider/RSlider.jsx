import React from 'react';
import "./slider.scss";
import one from "../../props/images/banner-img.jpg";
import two from "../../props/images/Kapitify.jpg";
import { useNavigate } from 'react-router';

function RSlider() {
    const navigate = useNavigate();
    const handleClick = ()=>{
      navigate("/register")
    }
    return (
        <div className='Slider'onClick={handleClick}>
            {/* <div class="Carousel">
                <div class="slides">
                    <div id="slide-1">
                      <img src={one} alt="" />
                    </div>
                    <div id="slide-2">
                    <img src={two} alt="" />
                    </div>
                </div>
            </div> */}
            <div class="carousel-wrapper">
  <div class="carousel-container">
    <div class="carousel">
      <div class="image-one"><img src={one} alt="" /></div>
      <div class="image-two"><img src={two} alt="" /></div>
      <div class="image-one"><img src={one} alt="" /></div>
      {/* <div class="image-three"></div> */}
    </div>
  </div>
</div>
            </div>
    )

}

export default RSlider;
