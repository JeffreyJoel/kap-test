import React from 'react';
import './forgotPassword.scss';
import Header from "../../components/header/Header";

function NewPassword(){
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
                Hi, Gbiaye Barnabas
                </p>
                <p className='Fpass_text'>Type in your new password</p>
                <form action="" className='Fpass_Form'>
                    <label>New Password</label><br/>
                   <div  className='password'>
                   <input type="password"
                    onFocus={handleFocus}
                    onBlur={handleFocusOut}/>
                   </div>
                    <label>Confirm New Password</label><br/>
                   <div className='password'>
                   <input type="password" 
                    onFocus={handleFocus}
                    onBlur={handleFocusOut}
                   />
                   </div>
                    <button  className='Fpass_btn'>Change Password </button>
                </form>
                <div className='Fpass_Link'>
                <a href="/login">Return to login</a>
                </div>
            </div>
        </div>
      
    )
   
}

  


export default NewPassword