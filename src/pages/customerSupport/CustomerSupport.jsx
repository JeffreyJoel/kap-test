import React, { useState } from 'react';
import close from "../../props/icons/Close_round.svg";
import message from "../../props/icons/Message_alt_light.svg";
import phone from "../../props/icons/Phone_light.svg"
import "./customer_support.scss";
//import CustomerSupportDisplay from './custSupportDisplay';
import Chat from "../../components/customerSupportChat/CustomSupportChat.jsx";
import { useNavigate } from 'react-router';
import ChatFooter from '../../components/chatFooter/ChatFooter';

const CustomerSupport = () => {
    const [Display1, setDisplay1] = useState(false)
    const [Display2, setDisplay2] = useState(false)
    const [Display3, setDisplay3] = useState(false)
    const [Display4, setDisplay4] = useState(false)
    const [Display5, setDisplay5] = useState(false)
    const navigate = useNavigate()

    
    return (
        <div className='customerSupport'>
            <div className="customerSupport_header bs">
                <img src={close} alt=""onClick={()=>{
                   navigate("/contact")
                }} />
                <span>Customer Support</span>
            </div>
            <div className='customerSupport_body' id="bdy">
                <div className='customerSupport_body_botResponse'>
                    <Chat />
                    <div className='customerSupport_body_botResponse_text'>
                        <div className='first'>
                            <p>Hello! We are happy to be at your service.</p>

                            <p>We hope to assist on the following issues:</p>
                            <ol>
                                <li onClick={() => {setDisplay1(!Display1)}}>How can I post items?</li>

                                <li onClick={() => {setDisplay2(!Display2)}}>Kapitify Customer Support</li>

                                <li onClick={() => {setDisplay3(!Display3)}}>How can I complete KYC?</li>

                                <li onClick={() => {setDisplay4(!Display4)}}>I want to report a Swapper</li>

                                <li onClick={() => {setDisplay5(!Display5)}}>I don't remember my password</li>
                            </ol>
                        </div>
                    </div>
                </div>


                <div className={`hide ${Display1 ? "show" :""}`}>
                    <div className='customerSupport_body_call'>
                        <p> How can I post items?</p>
                    </div>

                    <div className='customerSupport_body_botResponse' >
                        <Chat />
                        <div className='customerSupport_body_botResponse_text'>
                            <p>You can post any item you wish to swap by clicking on the "+" sign at the bottom right corner in your profile page.</p>
                        </div>
                    </div>

                </div>
                <div className={`hide ${Display2 ? "show" :""}`}>
                    <div className='customerSupport_body_call'>
                        <p> Kapitify Customer Support</p>
                    </div>

                    <div className='customerSupport_body_botResponse' >
                        <Chat />
                        <div className='customerSupport_body_botResponse_text'>
                         
                            <p>Good day! How may I be of
                                service to you? Kindly click on
                                any recommended questions
                                above to find the answer, or
                                clarify your issue here for
                                further assistance.</p>
                            <p>You can also send us an
                                email at <span>support@kapitify.com</span>
                                we will reply within 24 hours.</p>
                            <p>Also you can contact our customer support line <span>+2349012391057</span></p>
                            <p>OUR USERS ARE OUR PRIORITY!</p>
                        </div>
                    </div>

                </div>

                <div className={`hide ${Display3 ? "show" :""}`}>
                    <div className='customerSupport_body_call'>
                        How can I complete KYC?
                    </div>
                    <div className='customerSupport_body_botResponse' >
                        <Chat />
                        <div className='customerSupport_body_botResponse_text'>
                          
                            <p>Hey, for now KYC is unavailable, although we will release it soon. </p>
                            <p>Please stay tuned.</p>
                        </div>
                    </div>
                </div>
                <div className={`hide ${Display4 ? "show" :""}`}>
                    <div className='customerSupport_body_call'>
                        I want to report a Swapper
                    </div>
                    <div className='customerSupport_body_botResponse' >
                        <Chat />
                        <div className='customerSupport_body_botResponse_text'>
                            
                            <p>Send us an email immediately at <span>support@kapitify.com</span> with the following information: </p>
                            <ul>
                                <li>The Swapper's name</li>
                                <li>The screenshot of the recent conversation</li>
                                <li>The issue you experienced</li>
                                <p>We are truly sorry for your recent experience.</p>
                                <p>We take issues like this very seriously.</p>
                                <p>We will perform a thorough investigation, expect a reply from us within 48 hours.</p>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`hide ${Display5 ? "show" :""}`}>
                    <div className='customerSupport_body_call'>
                        I don't remember my password
                    </div>
                    <div className='customerSupport_body_botResponse' >
                        <Chat />
                        <div className='customerSupport_body_botResponse_text'>
                            {/* <p className='bold'>5. I don't remember my password</p> */}
                            <p>Hey, for now KYC is unavailable, although we will release it soon. </p>
                            <p>Please stay tuned.</p>
                        </div>
                    </div>
                </div>
                {/* {CustSupportData.map(({ call, response },idx) => (
                    <CustomerSupportDisplay call={call} response={response} />
                ))} */}
                <div className='customerSupport_body_final'>
                    <div>
                        <img src={message} alt="" />
                        <p>Feedback</p>
                    </div>
                    <div>
                        <img src={phone} alt="" />
                        <p>Call Hotline</p>
                    </div>
                </div>
                
            </div>
                <div>
                <ChatFooter/>
                </div>
        </div>
    )
}
export default CustomerSupport