import React from 'react';
import './waitlistHome.scss';
import phonesBackup from '../../props/icons/waitlistPhones.png';
import curve from '../../props/icons/half-curve.svg';
import imgIcon from '../../props/icons/ImgIcon.svg';
import desktop from '../../props/icons/waitlistDesktop.svg';
import share from '../../props/icons/Share.svg';
import monitor from '../../props/icons/monitor.svg';
import box from '../../props/icons/box.svg';
import gadgets from '../../props/icons/gadgets.svg';
import book from '../../props/icons/book.svg';
import clip from '../../props/icons/clip.svg';
import whatsapp from '../../props/icons/whatsappBtn.svg';
import facebook from '../../props/icons/facebookBtn.svg';
import twitter from '../../props/icons/twitterBtn.svg';
// import Header from '../../components/header/Header';
import FooterTag from '../../components/footerTag/FooterTag';
import WaitlistHomeHeader from '../../components/waitlistHomeHeader/waitlistHomeHeader';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios, { referralID } from '../../util';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { FacebookShareButton } from "react-share";
// import { useNavigate } from 'react-router-dom';
//const Phones = React.lazy(()=> import('./WaitlistPhone'));

function WaitlistHome() {
   const dispatch = useDispatch();
   const {referrals} = useSelector(state => state);
   const refLink = `kapitify.com/${referrals.refID}`;
   const navigate = useNavigate();
   const message = `Hey, I just found out about a platform that allows you to swap your items with no money involved. Join their waitlist now! ${refLink}`;

    const Copy = async ()=>{
        await navigator.clipboard.writeText(refLink);
        alert("Copied");
    }

   useEffect(() => {
        if(referralID){
            try {
                async function getReferer(){
                    const {data} = await axios({
                        method: 'GET',
                        url: `/referrals/${referralID}`,
                    });
                    console.log(data);
                    dispatch({
                        type: "setRefId",
                        referee: {refID: data.User._id, refCount: data.User.referalCount}
                    });
                }
                getReferer();
            } catch (error) {
                console.log(error)
            }
            
        }else{
            navigate("/")
        }
   }, [dispatch, navigate])
    

    function WhatsappShare() {
        const whatsappApi = `https://wa.me/?text= ${message} `;
        window.open(whatsappApi);
    }
    //function FBShare(){
    //     FB.ui({
    //         display: 'popup',
    //         method: 'share',
    //         href: 'https://developers.facebook.com/docs/',
    //         }, function(response){});
    // }
    function TwitterShare() {
        const twitterApi = `https://twitter.com/intent/tweet?text=${message}`;
        window.open(twitterApi);
    }
    return (
        <div className='WaitlistHome'>

            <div className='WaitlistHome__top'>
                <WaitlistHomeHeader />
                <div className='ellipse up'></div>
                <div className='ellipse left'></div>
                <div className='ellipse right'></div>
                <div className='WaitlistHome__top__body'>
                    <div className='WaitlistHome__top__body__main'>
                        <div className="WaitlistHome__top__body__main__left">
                            <div className="large-text">
                                <p>The <span>easiest</span> way to swap your items</p>
                                <img src={curve} alt="" />
                            </div>
                            <p className='smallText'>Kapitify helps you trade your items for things you need.</p>
                        </div>
                        <div className="WaitlistHome__top__body__main__right">
                            <img src={phonesBackup} alt="icon" className='phones floatAnimation' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='WaitlistHome__middle'>
                <div className="upper">
                    <p>Register In Minutes</p>
                    <p>Sign up stress free. It will only take a few minutes to get started.</p>
                </div>
                <div className="lower">

                    <div className='lower__section'>
                        <div>
                            <img src={imgIcon} alt="icon" />
                        </div>
                        <div className='text'>
                            <p>Make photos of your item</p>
                            <p>Feel free to make a lot of photos using your smartphone. We'll give you some tips!</p>
                        </div>
                    </div>

                    <div className='lower__section'>
                        <div>
                            <img src={desktop} alt="icon" className="desktop" />
                        </div>
                        <div className='text'>
                            <p>Upload your items and relax</p>
                            <p>After uploading your item, all you have to do is sit back and relax, Kapitify's algorithm will help you find a swapper.</p>
                        </div>
                    </div>

                    <div className='lower__section'>
                        <div>
                            <img src={share} alt="icon" />
                        </div>
                        <div className='text'>
                            <p>Share your swaps</p>
                            <p>You can always share your swaps on your favourite social media platforms.</p>
                        </div>
                    </div>


                </div>
            </div>
            <div className='WaitlistHome__bottom'>
                <div className='ellipse up'></div>
                <div className='ellipse left'></div>
                <div className='ellipse right'></div>
                <div className='WaitlistHome__bottom__body'>
                    <p className='header'>Swap Any Kind of Product or Item</p>
                    <div className='sections'>
                        <div className='item first'>
                            <img src={monitor} alt="" />
                            <div>
                                <p className='item__head'>Digital Products</p>
                                <p className='item__text'>Swap any and every kind of digital product, from software to games and more without stress.</p>
                            </div>
                        </div>

                        <div className='item second'>
                            <img src={book} alt="" />
                            <div>
                                <p className='item__head'>Books</p>
                                <p className='item__text'>Kapitify is the best platform to swap your textbooks, notes and novels.</p>
                            </div>
                        </div>

                        <div className='item third'>
                            <img src={gadgets} alt="" />
                            <div>
                                <p className='item__head'>Gadgets</p>
                                <p className='item__text'>Swap any kind of gadgets and electronics from smartphones, portable equipment to home appliances and more.</p>
                            </div>
                        </div>
                        <div className='item fourth'>
                            <img src={box} alt="" />
                            <div>
                                <p className='item__head'>Physical Goods</p>
                                <p className='item__text'>You can also use Kapitify to swap your physical product from clothing to cosmetics to vehicles to musical instruments and more.</p>
                            </div>
                        </div>
                    </div>
                    <p className='header'>Invite your friends & get rewards</p>
                    <div className='container'>
                        <div className='referral'>
                            <p className='label'>Your Referral Link</p>
                            <div className='InputBox'>
                                <input type="text" onClick={Copy} value={refLink} readOnly/>
                            </div>
                            <p className='link' onClick={Copy}><img src={clip} alt="icon" className="clip"/><span>Copy Link</span></p>
                    
                            <div className='socials'>
                                <img src={whatsapp} alt="social" onClick={() => {
                                    WhatsappShare()
                                }} />
                                <FacebookShareButton
                                    url={refLink}
                                    quote={message}
                                    className="Demo__some-network__share-button"
                                >
                                   <img src={facebook} alt="social" />
                                </FacebookShareButton>
                                
                                <img src={twitter} alt="social" onClick={() => {
                                    TwitterShare()
                                }} />
                            </div>
                            {
                                referrals.refCount === 0 ?
                                <p className='final-text'>Share! Don't Leave your friends behind.</p>
                                :
                                <p className='final-text'>You have referred {(referrals.refCount === 1 && 'a') || (referrals.refCount > 1 && referrals.refCount)} friend{(referrals.refCount === 1 && '') || (referrals.refCount > 1 && 's')}!</p>
                            }
                            
                        </div>
                    </div>


                </div>
                <FooterTag />
            </div>
        </div>
    )
}


export default WaitlistHome