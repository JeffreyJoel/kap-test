import React, { useState } from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./about.scss";
import CoreTeam from '../../components/coreTeam/CoreTeam';
// Add {useState}

function About() {
    const [Display1, setDisplay1] = useState(false)
    const [Display2, setDisplay2] = useState(false)
    const [Display3, setDisplay3] = useState(false)
    const [Display4, setDisplay4] = useState(false)
    // const [hideDisplay5, setHideDisplay5] = useState(true)
    // const [isActive, setActive] = useState(true)
    if (Display1 === "active"){
        alert("ok")
    }
    return (
        <div className='About'>
            <div className="About_header bs">
                <Header Main />
            </div>
            <div className='About_body' id="bdy">
                <div className="About_textHeading" >
                    About Us
                </div>
                <div className={`About_item ${Display1 ? "active" : ""}`} onClick={() => {
                    setDisplay1(!Display1);
                    setDisplay2(false);
                    setDisplay3(false);
                    setDisplay4(false);
                }} >
                    Our Story
                </div>
                <div className={`About_item ${Display2 ? "active" : ""}`} onClick={() => {
                    setDisplay2(!Display2);
                    setDisplay1(false);
                    setDisplay3(false);
                    setDisplay4(false);
                }}>
                    Our Vision
                </div>
                <div  className={`About_item ${Display3 ? "active" : ""}`} onClick={() => {
                    setDisplay3(!Display3);
                    setDisplay1(false);
                    setDisplay2(false);
                    setDisplay4(false);
                }}>
                    Why Choose Us
                </div>
                <div  className={`About_item ${Display4 ? "active" : ""}`} onClick={() => {
                    setDisplay4(!Display4);
                    setDisplay3(false);
                    setDisplay1(false);
                    setDisplay2(false);
                }}>
                    Core Team
                </div>
                <div className='About_item'>
                    Partnerships
                </div>

                <div className={`hide ${Display1 ? "About_display" : ""}`}>
                    <p className='head'>Our Story</p>
                    <p> Founded in 2021 by three friends, our aim was to build a community where people like us could
                        find everything they needed to settle into a new city, school or lifestyle and where people could discover
                        the true value of things and collect new items. We decided to create a secure and well regulated digital bartering platform based in Nigeria. A space where people could come together to help each other out in
                        small ways. </p>
                    <p>Today, Kapitify stands as one of Nigeria's largest and innovative online platform, serving
                        communities all around Nigeria, helping people find what they need most, affordably and locally.
                    </p>
                    <p> We are "a platform for all". So whether you’re looking for a buyer for that "thing" you no longer
                        need, a swapper to trade items with, a new car to get you around, a new phone, book or TV, Kapitify
                        makes good finds happen!</p>

                </div>
                <div className={`hide ${Display2 ? "About_display" : ""}`}>
                    <p className='head'>Our Vision</p>
                    <p> At Kapitify, we aim to make people feel at home. We also go the extra mile by helping our users
                        make good finds. From great deals that save you a few extra naira, to finding a swapper who will enjoy
                        an item as much as you did.</p>
                    <p>We have made it our responsibility to connect communities together. That's why we work
                        tirelessly to help make your experience on Kapitify a great one.</p>
                    <p>We are committed to rebuilding the trade-by-barter and recommerce culture in Nigeria. We
                        believe it will benefit various communities, businesses and the country as a whole.
                    </p>

                </div>
                <div className={`hide ${Display3 ? "About_display" : ""}`}>
                    <p className='head'>Why Choose Us</p>
                    <p>We are all about making our users comfortable. We have built Kapitify to:</p>
                    <ul>
                        <li> Be User friendly</li>
                        <li>Have end-to-end encryption on chats</li>
                        <li>Be SSL secured</li>
                        <li>Offer real-time notifications</li>
                        <li>Have fast loading time</li>
                        <li>Offer 24/7 customer support</li>
                        <li> Possess an appealing user interface</li>
                    </ul>
                    <p>We can guarantee an optimal experience</p>
                </div>
                <div className={`hide ${Display4 ? "About_display" : ""}`}>
                    <CoreTeam/>
                </div>
                <div className='About_display'>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About