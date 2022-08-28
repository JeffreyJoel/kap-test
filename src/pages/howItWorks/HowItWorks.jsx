import React from 'react';
import './howItWorks.scss';
import logo from '../../props/icons/kap-logo.svg';
import cancel from "../../props/icons/Close_round.svg";
import wavy from "../../props/icons/wavy.png";
import image from "../../props/images/how_it_works.png";
import curve1 from "../../props/icons/curve1.svg";
import curve2 from "../../props/icons/curve2.svg";
import curve3 from "../../props/icons/curve3.svg";
import monitor from '../../props/icons/monitor.svg';
import box from '../../props/icons/box.svg';
import gadgets from '../../props/icons/gadgets.svg';
import book from '../../props/icons/book.svg';
import { useNavigate } from 'react-router';
import WebFooter from '../../components/webFooter/WebFooter';
import google from '../../props/icons/google_grey.svg';
import bing from '../../props/icons/bing_grey.svg';
import yahoo from '../../props/icons/yahoo_grey.svg';
import duckduckgo from '../../props/icons/duckduckgo_grey.svg';
import yandex from '../../props/icons/Yandex_grey.svg';
import boxStack from '../../props/icons/box-stack.svg';
import DesktopHeader from '../../components/header/DesktopHeader';

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
                    <img src={logo} alt="logo" loading='lazy'/>
        
                    <img src={cancel} alt="cancel" onClick={handleBack} />
            </div>
            <DesktopHeader/>
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
                <div className='desktopFlexRowReverse'>
                <div className="HowItWorks__body__img">
                   <div className='BorderCorner'>
                   <img src={image}  alt="illustration" />
                   </div>
                </div>
                <div className='rectangle'></div>
                {/* <div className="HowItWorks__body__main"> */}
                <div className="HowItWorks__body__first bodyMargin">
                    <div className="HowItWorks__body__first__section">
                        <div className='left'>
                            <span>1.</span>
                            <img src={curve1} alt="" />
                        </div>
                        <div className='text'>
                        <p className='header'>Sign up and set your account</p>    
                            <p>
                            Signing up on kapitify is very easy. As soon as you sign up, you’ll be prompted to set up your account.
                            </p>
                        </div>
                    </div>
                    <div className="HowItWorks__body__first__section">
                        <div className='left'>
                            <span>2.</span>
                            <img src={curve2} alt="" />
                        </div>
                        <div className='text'>
                        <p className='header'>Upload your items</p>
                            
                            <p>
                            You can quickly upload your items on kapitify by adding some images of your item, input your item details, what you want to swap it for or if you’re open to offers.
                            </p>
                        </div>
                    </div>
                    <div className="HowItWorks__body__first__section">
                        <div className='left'>
                            <span>3.</span>
                            <img src={curve3} alt="" />
                        </div>
                        <div className='text'>
                        <p className='header'>Then sit back and relax</p>
                          
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
                   
                </div>
                </div>
                <button className='HowItWorks__body__first__btn' onClick={handleJoin}>Join now</button>
                <div className='boxStack bodyMargin'><img src={boxStack} alt="" /></div>
                <div  className="HowItWorks__body__second bodyMargin">
                    <p className='HowItWorks__body__second__title'>Swap any kind of product or item</p>
                    <div className='sections'>
                        <div  className='HowItWorks__body__second__item first'>
                            <img src={monitor} alt="" />
                            <div>
                                <p className='HowItWorks__body__second__item__head'>Digital Products</p>
                                <p className='HowItWorks__body__second__item__text'>Swap any and every kind of digital product, from software to games and more without stress.</p>
                            </div>
                        </div>

                        <div className='HowItWorks__body__second__item  second'>
                            <img src={book} alt="" />
                            <div>
                                <p className='HowItWorks__body__second__item__head'>Books</p>
                                <p className='HowItWorks__body__second__item__text'>Kapitify is the best platform to swap your textbooks, notes and novels.</p>
                            </div>
                        </div>

                        <div className='HowItWorks__body__second__item  third'>
                            <img src={gadgets} alt="" />
                            <div>
                                <p className='HowItWorks__body__second__item__head'>Gadgets</p>
                                <p className='HowItWorks__body__second__item__text'>Swap any kind of gadgets and electronics from smartphones, portable equipment to home appliances and more.</p>
                            </div>
                        </div>
                        <div className='HowItWorks__body__second__item  fourth'>
                            <img src={box} alt="" />
                            <div>
                                <p className='HowItWorks__body__second__item__head'>Physical Goods</p>
                                <p className='HowItWorks__body__second__item__text'>You can also use Kapitify to swap your physical product from clothing to cosmetics to vehicles to musical instruments and more.</p>
                            </div>
                        </div>
                    </div>

                    </div>

                <div className="HowItWorks__body__third">
                    <p className="HowItWorks__body__third__title">Everything is done for you</p>
                    <p className="HowItWorks__body__third__body">Our advanced search engine optimization would help your items show up on Google, Bing, Yahoo, DuckDuckGo and Yandex when swappers search related keywords.</p>
                    <div className="HowItWorks__body__third__icons">
                        <img src={google} alt=""  className='HowItWorks__body__third__icons__google'/>
                        <img src={bing} alt="" className='HowItWorks__body__third__icons__bing'/>
                        <img src={yahoo} alt="" className='HowItWorks__body__third__icons__yahoo'/>
                        
                        <img src={duckduckgo} alt="" className='HowItWorks__body__third__icons__duckduckgo'/>
                        <img src={yandex} alt="" className='HowItWorks__body__third__icons__yandex'/>
                    </div>
                </div>
                <div className="HowItWorks__body__fourth bodyMargin">
                    <div>
                    <p className="HowItWorks__body__fourth__title">Start swapping with kapitify</p>
                    <p className="HowItWorks__body__fourth__body">Create a free account in less than 5 minutes and start swapping!</p>
                    <button className="HowItWorks__body__fourth__btn">Sign up for free</button>
                    </div>
                
                </div>

              
                {/* </div> */}
                <div className='HowItWorks__body__Footer '>
                <WebFooter/>
                </div>
                
             
            </div>
            
        </div>
    );
}

export default HowItWorks
