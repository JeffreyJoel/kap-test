import React from 'react';
import './userInput.scss';
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer';

function Update_Location(){
    return(
        <div className='UserInput'>
            <div className='UserInput_Header'>
                <Header Main/>
            </div>
            <div className='UserInput_Body'>
                <p className='UserInput_TextHeading'>
                Update Location
                </p>
                <p className='UserInput_text'>This should be the location you <br/>currently live in.</p>
                <form action="" className='UserInput_Form'>
                    <div className='UserInput_flex'>
                    <div className='field mr'>
                    <label>State</label><br/>
                    <input type="text" name="" id="" />
                    </div>
                    <div className='field'>
                    <label>City</label><br/>
                    <input type="text" name="" id=""/>
                    </div>
                    </div>
                    <label>Address</label><br/>
                    <input type="text" name="" id="" />
                    <button className='btn'>Save</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}



export default Update_Location
