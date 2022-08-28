import React from 'react';
import facebook from '../../props/icons/facebook_plain.svg';
import instagram from '../../props/icons/instagram_plain.svg';
import twitter from '../../props/icons/twitter_plain.svg';
import logo from '../../props/icons/kap-logo.svg';
import './webFooter.scss';
import { Link } from 'react-router-dom';

function WebFooter() {

    return (
        <div className="WebFooter">
            <div className="WebFooter__main">
                <div className="WebFooter__main__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="WebFooter__main__socials">
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
                <div className="WebFooter__main__info">
                    <div className="WebFooter__main__info__section">
                        <div className='WebFooter__main__info__section__header'>
                            Products
                        </div>
                        <p>
                            <Link to="/">How it works</Link>
                        </p>
                        <p>
                            <Link to="/">Features</Link>
                        </p>
                        <p>
                            <Link to="/">Browse Categories</Link>
                        </p>
                        <p className="pro-container">
                            <Link to="/">Kapitify Pro  <span className='pro'>Coming Soon</span></Link>
                        </p>
                      
                    </div>
                    <div className="WebFooter__main__info__section right">
                        <div className='WebFooter__main__info__section__header'>
                            Support & Resources
                        </div>
                        <p>
                            <Link to="#">Blog</Link>
                        </p>
                        <p>
                            <Link to="#">FAQs</Link>
                        </p>
                        <p>
                            <Link to="#">About us</Link>
                        </p>
                        <p>
                            <Link to="#">Contact us</Link>
                        </p>

                    </div>

                    <div className="WebFooter__main__info__section third">
                        <div className='WebFooter__main__info__section__header'>
                            Legal
                        </div>
                        <p>
                            <Link to="/">Terms & Condition </Link>
                        </p>
                        <p>
                            <Link to="/">Privacy Policy</Link>
                        </p>
                      
                    </div>
                </div>

                <div className="WebFooter__main__info mobileBottom">
                    <div className="WebFooter__main__info__section">
                        <div className='WebFooter__main__info__section__header low'>
                            Legal
                        </div>
                        <p>
                            <Link to="/">Terms & Condition </Link>
                        </p>
                        <p>
                            <Link to="/">Privacy Policy</Link>
                        </p>
                      
                    </div>
                    <div className="WebFooter__main__info__section right">
                      <div>
                      <p>© 2022 Kapitify Labs</p>
                        <small>
                        Rights Reserved.
                        </small>
                      </div>
                   
                    </div>
                </div>

                <div className="WebFooter__main__copyright">
                      <p>© 2022 Kapitify Labs</p>
                        <small>
                        Rights Reserved.
                        </small>
                      </div>
                   
            </div>

        </div>
    )
}

export default WebFooter