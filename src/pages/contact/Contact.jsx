import React from 'react';
import Header from "../../components/header/Header";
import availability from '../../props/icons/availability.svg';
import speed from '../../props/icons/speed.svg';
import trust from '../../props/icons/trust.svg';
import FooterTag from '../../components/footerTag/FooterTag';
import mail from '../../props/icons/mail-lg.svg';
import arrow from '../../props/icons/kap-arrow.svg';
import { Link } from 'react-router-dom';
import "./contact.scss"

function Contact() {
    return (
        <div className='Contact'>
                <Header />
           <div className='Contact__body'>
            <div  className='Contact__body__top'>
                <h3>Need  help?</h3>
                <p>Efficient customer service to ensure the quality of our service.</p>
            </div>
            <div  className='Contact__body__mid'>
                <div className='Contact__body__mid__item'>
                    <img src={speed} alt="icon" />
                    <p className='topText'>Speed</p>
                    <p  className='btmText'>Fast as Lightning, we’ll answer you within a day</p>
                </div>
                <div className='Contact__body__mid__item mob-hide'>
                <img src={trust} alt="icon" />
                    <p className='topText'>Trust</p>
                    <p  className='btmText'>We are committed to finding you the ideal swapper</p>
                </div>
                <div className='Contact__body__mid__item mob-hide'>
                <img src={availability} alt="icon" />
                    <p className='topText'>Availabilty</p>
                    <p  className='btmText'>We are available 24/7</p>
                </div>
            </div>
            <div  className='Contact__body__bottom'>
                <div className='main'>
                    <img src={mail} alt="" />
                    <div >
                        <p className='topText'>Let’s chat by email</p>
                        <p className='midText'>
                        For general inquiries, partnerhip enquiries or media enquiries, send an email and we will be in touch as soon as possible.
                        </p>
                       <a href='mailto:kapitify@gmail.com'> <p className='linkText'><img src={arrow} alt="icon" className="arrow" /> Send an email</p></a>
                    </div>
                </div>
                <div className="join"> 
                    <p className='top'>The easiest way to swap your items</p>
                    <p className='bottom'>Get on the waitlist and be the first to know when we launch.</p>
                    <Link to="/waitlist"> <button>Join</button></Link>
                </div>
            </div>
           </div>
           <FooterTag/>
        </div>
    )
}
export default Contact