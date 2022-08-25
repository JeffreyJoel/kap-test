import React from 'react';
import './userInput.scss';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';

function changeEmail(){
    return(
        <div className='UserInput'>
            <div className='UserInput_Header'>
                <Header Main/>
            </div>
            <div className='UserInput_Body'>
                <p className='UserInput_TextHeading'>
                Change Email Address
                </p>
                <p className='UserInput_text'>This should be the Email Address <br/>you currently use.</p>
                <form action="" className='UserInput_Form'>
                    <label htmlFor="Email">Email Address</label><br/>
                    <input type="email" name="" id="Email" placeholder='Gbiayebarnabas@gmail.com'/>
                    <button className='btn'>Save</button>
                </form>
            </div>

            <Footer/>
        </div>
    )
}



export default changeEmail
