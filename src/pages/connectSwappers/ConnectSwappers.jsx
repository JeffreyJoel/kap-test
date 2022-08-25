import React from 'react';
import cartoon from "../../props/icons/Group 386.svg";
import "./connect.scss";


function ConnectSwappers() {
    return (
        <div className='Connect'>
            <div className='Connect_body'>
                {/* <img src={userIcon} alt=""className='Connect_user' /> */}
                <img src={cartoon} alt=""  className='cartoon'/>
                
                <p className='Connect_body_text'>
                    Connect easily with Swappers 
                </p>
                
            </div>
        </div>
    )
}
export default ConnectSwappers;