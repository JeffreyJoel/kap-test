import React from 'react';
import './howItWorks.scss';
import logo from '../../props/icons/kap-logo.svg';
import cancel from "../../props/icons/Close_round.svg";
import wavy from "../../props/icons/wavy.svg";
import image from "../../props/images/how_it_works.png";
import curve1 from "../../props/icons/curve1.svg";
import curve2 from "../../props/icons/curve2.svg";
import curve3 from "../../props/icons/curve3.svg";
import { useNavigate } from 'react-router';
import WebFooter from '../../components/webFooter/WebFooter';

// There will be some new additions to this page, and the image of the guy will change.

function HowItWorks() {
    const navigate = useNavigate()

    const handleJoin = () => {
        navigate('/')
    }
    const handleBack = (e) =>{
        e.preventDefault();
        navigate(-1);
    };
    return (
        <div className="HowItWorks">
            <div className="HowItWorks__header">
                <span>
                    <img src={logo} alt="logo" loading='lazy'/>
                </span>
                <span>
                    <img src={cancel} alt="cancel" onClick={handleBack} />
                </span>
            </div>
            <div className='HowItWorks__body'>
                <div className='HowItWorks__body__top'>
                    <img src={wavy} alt="" />
                    <div className='text'>
                    <p >How It Works</p>
                    </div>
                </div>
                <div className="HowItWorks__body__mid">
                    <div className='text'>
                        <p>
                        In less than 5 minutes, you can get started swapping your items for free.
                        </p>
                    </div>
                </div>
                <div className="HowItWorks__body__img">
                   <div className='BorderCorner'>
                   <img src={image}  alt="illustration" />
                   </div>
                </div>
                <div className="HowItWorks__body__final">
                    <div>
                        <div className='header'>
                            <span>1.</span>
                            <p>Sign up and set your account</p>
                        </div>
                        <div className='text'>
                            <span><img src={curve1} alt="" /></span>
                            <p>
                            Signing up on kapitify is very easy. As soon as you sign up, you’ll be prompted to set up your account.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='header'>
                            <span>2.</span>
                            <p>Upload your items</p>
                        </div>
                        <div className='text'>
                            <span><img src={curve2} alt="" /></span>
                            <p>
                            You can quickly upload your items on kapitify by adding some images of your item, input your item details, what you want to swap it for or if you’re open to offers.
                            </p>
                        </div>
                    </div>
                    <div className='third'>
                        <div className='header'>
                            <span>3.</span>
                            <p>Then sit back and relax</p>
                        </div>
                        <div className='text'>
                            <span><img src={curve3} alt="" /></span>
                           <div className='double-text'>
                           <p>
                            After uploading your item, all yoou have to do is sit back and relax, Kapitify’s algorithm will help you find a swapper.
                            </p>
                            <p>    
                            You can always share your swaps on your favourite social media platforms.
                            </p>
                           </div>
                        </div>
                    </div>
                    <button className='HowItWorks__body__final__btn' onClick={handleJoin}>Join now</button>
                    <WebFooter/>
                </div>
            </div>
            
        </div>
    );
}

export default HowItWorks
