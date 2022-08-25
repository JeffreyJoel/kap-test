import React from 'react';
import './waitlist.scss';
import logo from '../../props/icons/kapLogo-white.svg';
import openBox from '../../props/icons/waitlistOpenBox.svg'
import waitlistText from '../../props/icons/waitText.svg';
import curve from '../../props/icons/barn 1.svg';
import mobText from '../../props/icons/mobLargeText.svg';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
//import FooterTag from '../../components/footerTag/FooterTag';
import axios, { referralID, setRefId } from "../../util";
import { useEffect } from 'react';

function Waitlist() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const {referral} = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        referralID && navigate("/waitlist");
    },[navigate]);


    const handleJoin = (e) =>{
        e.preventDefault();
        setLoading(true);

        async function getRefferal(){
            try {
                const {data} = await axios({
                    method: "POST",
                    url: "/referrals",
                    data: {
                    email: email,
                    referee: referral
                    },
                    headers: {
                    "Content-Type": "application/json",
                    },
                });

                setRefId(data.referal._id);
                window.location.assign("/waitlist");
            } catch(err){
                if(err.response.status === 409){
                    setRefId(err.response.data.User._id);
                    window.location.assign("/waitlist");
                }
            } 
        }getRefferal();
                   
      
    }

   

    return (
        <div className='Waitlist'>
            <div className='ellipse up'></div>
            <div className='ellipse left'></div>
            <div className='ellipse right'></div>
            <div className='Waitlist__Body'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className="Waitlist__Body__main">
                    <div className="Waitlist__Body__main__text">
                   <div className='large-text'>
                      <img src={waitlistText} className="waitlist" alt="img" /> 
                   {/* <p className='waitlistMobText'>Swap anything<br/> on Kapitify</p>  */}
                   <img src={curve} className="curve" alt="img" />
                    <img src={mobText}className='waitlistMobText' alt='text'/>
                   </div>
                        <p className='small'>
                            Get on the waitlist and be the first to<br /> know when we launch.
                        </p>
                        <div  className='email-div'>
                            <p><span>Join over 1,000 people</span> who have already signed up</p>
                             <form onSubmit={handleJoin} className='email-input'>
                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email Address' />
                                <button className='input-btn'
                                type='submit'
                                > {loading ? <div className='spin'></div> :"Join"}</button>
                            </form> 
                        </div>
                    </div>
                    <div className='openBox'>
                        <img src={openBox} alt="img" />
                    </div>
                </div>
                {/* <FooterTag/> */}
            </div>
            
        </div>
    )
}


export default Waitlist