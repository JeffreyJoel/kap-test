import React, { useState } from 'react';
import avatar from "../../props/icons/User_cicrle.svg";
import chatIcon from '../../props/icons/Message_dark.svg';
import orderIcon from '../../props/icons/Heart.svg';
import logo from '../../props/icons/kap-logo.svg';
import hamburger from "../../props/icons/hamburger.svg";
import Search from '../search/Search';
import './desktopHeader.scss';


function DesktopHeader() {
    return(
        <div className="DesktopHeader">
         <div className="DesktopHeader__main">
            <img src={hamburger} alt="" />
            <img src={logo} alt="" />
            <Search/>
            <div className='DesktopHeader__main__iconList'>
            <div className="DesktopHeader__main__iconGrp">
                <img src={avatar} alt="" className="avatar" />
                <span>Accounts</span>
            </div>
            <div  className="DesktopHeader__main__iconGrp">
                <img src={chatIcon} alt=""  className="chatIcon"/>
                <span>Chat</span>
            </div>
            <div  className="DesktopHeader__main__iconGrp">
                <img src={orderIcon} alt="" className="orderIcon"/>
                <span>My Interest</span>
            </div>
            </div>
         </div>
          
        </div>
    )
}


export default DesktopHeader