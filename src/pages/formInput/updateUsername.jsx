import React from 'react';
import './userInput.scss';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';

function UpdateUsername(){
    return(
        <div className='UserInput'>
            <div className='UserInput_Header'>
                <Header Main/>
            </div>
            <div className='UserInput_Body'>
                <p className='UserInput_TextHeading'>
                    Update Username
                </p>
                <p className='UserInput_text'>Change Username to a more preferred<br/> one.</p>
                <form action="" className='UserInput_Form'>
                    <label htmlFor="userName">Update Username</label><br/>
                    <input type="text" name="" id="userName" />
                    <button className='btn'>Save</button>
                </form>
            </div>

            <Footer/>
        </div>
    )
}



export default UpdateUsername
