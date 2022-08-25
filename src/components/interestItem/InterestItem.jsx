import React from 'react';
import "./interestItem.scss";
import iphone from "../../props/images/iphone.png";
import chatUp from "../../props/icons/Chat_alt_2_fill.svg";
import { useNavigate } from "react-router";



function InterestItem() {
    const navigate = useNavigate();


    const handleChatUp = () => {
      navigate("/chat");
    };

    return (
      <div className="InterestItem">
        <div className="InterestItem__info">
          <div className="InterestItem__info__img">
            <img src={iphone} alt="product" />
          </div>
          <div className="InterestItem__info__name">
            <p>
              iphone Xr-
              <br /> <span>swap</span> for anything
            </p>
            <div></div>
          </div>
          <div className="InterestItem__info__cta" onClick={handleChatUp}>
            <img src={chatUp} alt="chat" />
          </div>
        </div>
        <hr />
        <div className="InterestItem__remove">
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#06335B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#06335B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <p>Remove</p>
        </div>
      </div>
    );
}

export default InterestItem;
