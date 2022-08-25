import React from "react";
import chat from "../../props/icons/Chat_fill.svg";
import "./custSupportChat.scss";

function CustomSupportChat(){
    return(
        <div className="customerSupport_chat">
        <img src={chat} alt="" className="customerSupport_chat_icon"/>
        </div>
    )

}



export default CustomSupportChat