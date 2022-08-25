import React from 'react';
import './userInput.scss';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';

function UpdateName(){
    return(
        <div className='UserInput'>
            <div className='UserInput_Header'>
                <Header Main/>
            </div>
            <div className='UserInput_Body'>
                <p className='UserInput_TextHeading'>
                Update Name
                </p>
                <p className='UserInput_text'>This should be your full legal name as <br/>it appears on all your Documents.</p>
                <form action="" className='UserInput_Form'>
                    <label>First Name</label><br/>
                    <input type="text" name="" id="" />
                    <label>Last Name</label><br/>
                    <input type="text" name="" id="" />
                    <button className='btn'>Save</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}



export default UpdateName
