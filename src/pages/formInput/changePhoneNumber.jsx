import React from 'react';
import './userInput.scss';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';

function changePhoneNumber(){
    return(
        <div className='UserInput'>
            <div className='UserInput_Header'>
                <Header Main/>
            </div>
            <div className='UserInput_Body'>
                <p className='UserInput_TextHeading'>
                Change Phone Number
                </p>
                <p className='UserInput_text'>This should be the line you <br/>currently use.</p>
                <form action="" className='UserInput_Form'>
                    <label htmlFor="Number">Phone Number</label><br/>
                    <input type="number" name="" id="Number" placeholder= "+2345678910111"/>
                    <button className='btn'>Save</button>
                </form>
            </div>

            <Footer/>
        </div>
    )
}



export default changePhoneNumber
