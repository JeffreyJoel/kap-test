import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./kyc.scss";
import kyc1 from "../../props/icons/hand-shake.svg";
import kyc2 from "../../props/icons/User_fill.svg";
import { useNavigate } from 'react-router';
import pointer from "../../props/icons/faq-pointer.svg";
import unavailable from "../../props/icons/unavailable.svg";

function KYC({Unavailable}){
    const navigate =useNavigate()
    
    return(
    
        <div className='KYC'>
            <div className = "KYC_header bs">
                <Header Main/>
            </div>
            <div className='KYC_body' id="bdy">
            <p className='KYC_top'>
            Privacy & Security
            </p>
            <div  className='KYC_section2'>
                <h3>
                KYC authentication
                </h3>
                <p>
                To protect your account identity, it is recommeded that you perform at least one Know Your Customer authentication.
                </p>
            </div>
            <div className='KYC_section3'>
            {/* <img src={kyc1} alt="" />
            <img src={kyc2} alt="" /> */}
            <div className='KYC_section3_div'>
            <img src={unavailable} alt="" className='unavailable' />
                <div>
                    <img src={kyc1} alt="" />
                    <p>Student KYC Registration</p>
                </div>
                <img src={pointer} alt="" className='pointer' />
            </div>
            <div className='KYC_section3_div'>
            <img src={unavailable} alt="" className='unavailable uavlb2' />
                <div className='kyc2'>
                    <img src={kyc2} alt="" />
                    <p>Identity<br/> Verification</p>
                </div>
                <img src={pointer} alt="" className='pointer' />
            </div>
            </div>
            <div className='KYC_section4'>
            <div className='KYC_items' onClick={()=>{
                    navigate(`/change-login-password`)
                }}>
                <p>Password</p>
                <div>
                <span>Change</span>
                <img src={pointer} alt="" className='pointer'/>
                </div>
                </div>
                <div className='KYC_items' onClick={()=>{
                    navigate('/privacy-policy')
                }}>
                <p>Privacy Policy</p>
                <img src={pointer} alt="" className='pointer'/>
                </div>
                <div className='KYC_items' onClick={()=>{
                    navigate('/terms-of-use')
                }}>
                <p>Terms and Conditions</p>
                <img src={pointer} alt="" className='pointer'/>
                </div>
                <div className='KYC_items' onClick={()=>{
                    navigate('/cookie-policy')
                }}>
                <p>Cookie Policy</p>
                <img src={pointer} alt="" className='pointer'/>
                </div>
            </div>
                
            </div>
            <Footer/>
        </div>
    )
}
export default KYC