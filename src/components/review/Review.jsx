import React from 'react';
import "./review.scss";
import ratedStar from "../../props/icons/rated-star.svg";
import unratedStar from "../../props/icons/unrated-star.svg";

function Review(){
  return(
    <div className="Review">
        <div className="Review__author">
            <div className="Review__author__img"></div>
            <p className="Review__author__name">
                jayperry
            </p>
        </div>
        <p className="Review__message">
            product eactly a promied and didnt have to ait too long to meet him up, great in all
            
        </p>
        <div className='Review__stars'>
            <img src={ratedStar} alt="star"/>
            <img src={ratedStar} alt="star"/>
            <img src={ratedStar} alt="star"/>
            <img src={unratedStar} alt="star"/>
            <img src={unratedStar} alt="star"/>
        </div>
    </div>
  )
}
export default Review;