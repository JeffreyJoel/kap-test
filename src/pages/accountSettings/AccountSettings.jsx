import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import pointer from "../../props/icons/dark_pointer.svg";
import userPic from "../../props/images/user2.png";
import { useNavigate } from 'react-router';
import "./AcctSetting.scss";


function AccountSetting() {
    const navigate = useNavigate();
    return (
        <div className='AcctSettings'>
            <div className="AcctSettings_header bs">
                <Header Main />
            </div>
            <div className='AcctSettings_body'>
                <div className='AcctSettings_body_top section'>
                <img src={userPic} alt="" className='userIcon' />
                <div className='text'>
                <p className='t1'>Hi, Barnabas</p>
                <p className='t2'>barnabasgbiaye@gmail.com</p>
                </div>
                <img src={pointer} alt=""  className='pointer'/>
                </div>
                <p className='Acct_label'>Account</p>
                <div className='section items' onClick={()=>{
                    navigate(`/settings`)
                }}>
                <p>General Settings</p>
                <img src={pointer} alt="" className='pointer'/>
                </div>
                <div className='section items' onClick={()=>{
                    navigate(`/kyc`)
                }}>
                <p>Privacy & Security</p>
                <img src={pointer} alt="" className='pointer'/>
                </div>
                <div className='section items' onClick={()=>{
                    navigate(`/customer-support`)
                }}>
                <p>Customer Support</p>
                <img src={pointer} alt="" className='pointer'/>
                </div>
                <div className='section items'>
                <p>Log Out</p>
                <img src={pointer} alt="" className='pointer'/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default AccountSetting