import React from 'react';
import './userInput.scss';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'
import darkPointer from "../../props/icons/dark_pointer.svg";
import Keyfill from "../../props/icons/Key_fill.svg"

function changePLoginPassword(){
    return(
        <div className='UserInput'>
            <div className='UserInput_Header bs'>
                <Header Main/>
            </div>
            <div className='UserInput_Body body'>
            <h5 className=' small_header'>Privacy & Security<img className ="UserInput_pointer" src={darkPointer} alt="" /><span> Change Login Password </span></h5>
            <div className = "UserInput_popup">
            <img src={Keyfill} alt="Key" className='UserInput_icon' />
           <p> For security purposes, include a combination of letters, numbers and characters to make your password more secure.</p>
            </div>
                <form action="" className='UserInput_Form'>
                    <label >Old Password</label><br/>
                    <input type="password" name="" />
                    <label >New Password</label><br/>
                    <input type="password" name="" />
                    <label >Confirm New Password</label><br/>
                    <input type="password" name="" />
                    <button className='btn2'>Confirm Change</button>
                </form>
            </div>

            <Footer/>
        </div>
    )
}



export default changePLoginPassword
