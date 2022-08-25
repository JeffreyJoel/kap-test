import React from 'react';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';
import rightPointer from "../../props/icons/faq-pointer.svg";
import './details.scss';
import { useSelector } from 'react-redux';



function Details() {
    const { user } = useSelector(state => state);

    return ( 
        <div className='Details'>
            <div className='Details_Header bs'>
                <Header Main />
            </div>
            <div className='Details_Body body'>
                <h5 className=' small_header'>Personal Details</h5>
                <div className="Details_item">
                    <div>
                    <label>Swapper Name</label><br/>
                    <p>{user?.kp_fname}</p>
                    </div>
                    <img src={rightPointer} alt="" />
                </div>
                <div className="Details_item">
                <div>
                    <label>Location</label><br/>
                    <p>....</p></div>
                    <img src={rightPointer} alt="" />
                </div>
                <div className="Details_item">
                <div>
                    <label>Username</label><br/>
                    <p>{ user?.kp_uname}</p></div>
                    <img src={rightPointer} alt="" />
                </div>

            </div>

            <Footer />
        </div>
    )
}



export default Details
