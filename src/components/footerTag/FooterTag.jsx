import React, { } from 'react';
import "./footerTag.scss";
import fbWhite from '../../props/icons/fb-bg-white.svg';
import twWhite from '../../props/icons/tw-bg-white.svg';
import igWhite from '../../props/icons/ig-bg-white.svg';


function FooterTag() {
    return(
        <div className='FooterTag'>
        <div className='SocialMediaConnect'>
                <p>Connect with us</p>
                <div className="icons">
                    <a href="https://facebook.com/Kapitify-109628491771091"><img src={fbWhite} alt="social" /></a>
                  <a href="https://twitter.com/Kapitify"><img src={twWhite} alt="social" className="tweetBig"/></a>
                   <a href="https://www.instagram.com/kapitify/"><img src={igWhite} alt="social" /></a>
                </div>
            </div>
        <div className='FooterTag__footer'>
            <p>© Copyright Kapitify Labs 2022 </p>
        </div>
        </div>
    )
}
export default FooterTag;