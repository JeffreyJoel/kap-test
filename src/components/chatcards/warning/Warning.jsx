import React, { useState } from 'react';
import "./warning.scss";

function Warning() {
    const [close, setClose] = useState(false);
    const [more, setMore] = useState(false);

    const handleMore = () => {
        setMore(!more);
    };


    const handleClose = () => {
        setClose(true);
    };
    return (
      <div className={close ? "Warning hide" : "Warning"}>
        <p className="Warning__info">
          Do not release any sensitive information that could put you at risk.
        </p>
        <p className="Warning__more" onClick={handleMore}>
          <span>Details</span>
          <svg
            width="9"
            height="9"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 9L11.9571 8.29289L12.6642 9L11.9571 9.70711L11.25 9ZM7.45711 3.79289L11.9571 8.29289L10.5429 9.70711L6.04289 5.20711L7.45711 3.79289ZM11.9571 9.70711L7.45711 14.2071L6.04289 12.7929L10.5429 8.29289L11.9571 9.70711Z"
              fill="#57CC99"
            />
          </svg>
        </p>
        <div className="Warning__close" onClick={handleClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#FFFFFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#FFFFFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {more && (
          <div className="More">
            <div className="More__info">
              <h3>Risk Notice</h3>
              <div>
              <ul>
                <li>
                  Do not release any sensitive information that could put you at
                  risk.
                </li>
                <li>
                  Meet swappers in person, within your location and in a public
                  place.
                </li>
                <li>Never give out your financial information.</li>
                <li>Do not send money to any swapper.</li>
              </ul>
              </div>
              <button onClick={handleMore}>I Understand</button>
            </div>
          </div>
        )}
      </div>
    );
}

export default Warning
