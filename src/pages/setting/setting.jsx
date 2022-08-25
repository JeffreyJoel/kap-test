import React from 'react';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import rightPointer from "../../props/icons/faq-pointer.svg";
import './settings.scss';
import { useNavigate } from 'react-router';
// import togglerActive from "../../props/icons/toggler_active.svg"
function Setting() {
    const navigate = useNavigate();
    return ( 
        <div className='Setting'>
            <div className='Setting_Header bs'>
                <Header Main />
            </div>
            <div className='Setting_Body body'>
                <p className='small_header'>General Settings</p>
                <div className="Setting_item">
                    <p>Personal Details</p>
                    <img src={rightPointer} alt=""   onClick={()=>{
                        navigate(`/personal-details`)
                    }}/>
                </div>
                <div className="Setting_item">
                    <p>Phone Number</p>
                    <div onClick={()=>{
                        navigate(`/change-phonenumber`)
                    }}>
                    <span>Change</span>
                    <img src={rightPointer} alt="" />
                    </div>
                </div>
                <div className="Setting_item">
                    <p>Email Address</p>
                    <div onClick={()=>{
                        navigate(`/change-email`)
                    }}>
                    <span>Change</span>
                    <img src={rightPointer} alt="" />
                    </div>
                </div>
                <div className="Setting_item">
                    <p>Show Student Status</p>
                    <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
                </div>

            </div>

            <Footer />
        </div>
    )
}



export default Setting
