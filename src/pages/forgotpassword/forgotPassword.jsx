import React, {useState} from 'react';
import './forgotPassword.scss';
import Header from "../../components/header/Header";
import doneRing from "../../props/icons/Done_ring_round_light.svg"

function ForgotPassword(){
    const [hidePopup, setHidePopup] = useState(true)
    const handleFocus = (e) => {
        // e.target.parentNode.style.borderColor = "#57CC99";
        e.target.parentNode.style.borderColor = "#04c270";
       }
       const handleFocusOut = (e) => {
         e.target.parentNode.style.borderColor = "#707070";
       }
    return(
        <div className='Fpass'>
            <div className='Fpass_Header'>
                <Header/>
            </div>
            <div className='Fpass_Body'>
                <p className='Fpass_TextHeading'>
                Forgot your password?
                </p>
                <p className='Fpass_text'>Enter the email address associated with<br/> your kapitify account and we’ll send you a <br/>link to reset your password.</p>
                <div className={`success_popup ${hidePopup ? "success_hide" : ""}`} id='popUp' >
                   <img src={doneRing} alt="check-mark" className='success_icon' />
                    <p>Your password reset link has been sent to you</p>
                </div>
                <form action="/new-password" className='Fpass_Form'>
                    <label>Email Address</label><br/>
                 <div className='text-box'>
                 <input type="text"  
                 onFocus={handleFocus}
                 onBlur={handleFocusOut}
                 />
                 </div>
                    <button type='submit' className='Fpass_btn' id='btn' onClick={()=>{setHidePopup(false)}}>Send Reset Link</button>
                </form>
                
                <div className='Fpass_Link'>
                <a href="/login">Return to login</a>
                </div>
            </div>
        </div>
      
    )
   
}
export default ForgotPassword
