import React from 'react';
import "./message.scss";

function Message({reverse}){
  return(
    <div className={ reverse ? "Message__reverse" : "Message"}>
        {/* <p className="author">
            George Emeagwai
        </p> */}
        <div className="info">
            <p className="info__time">16:04</p>
            <p className="info__detail">
                So Sir, where do we meet?
            </p>
        </div>
    </div>
  )
}
export default Message;