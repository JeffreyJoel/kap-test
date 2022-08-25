import React, { useState } from 'react';
import { useNavigate } from "react-router";
import logo from '../../props/icons/kap-logo.svg';
//import hamburger from "../../props/icons/hamburger.svg";
import cancel from "../../props/icons/Close_round.svg";
import dropdown from "../../props/icons/drop_down.svg";
import '../header/header.scss';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import hamburger from "../../props/icons/hamburger.svg";
// import menuBar from '../../props/icons/menuBar-white.svg';
import LogoDark from '../../props/icons/kapLogo-white.svg';
import dropWhite from '../../props/icons/dropWhite.svg';
import upArrowWhite from "../../props/icons/upArrowWhite.svg";
import NewMenu from '../NewMenu/NewMenu';




function WaitlistHomeHeader() {

    const [navChange, setNavChange] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    //const [content, setContent] = useState(false);
    const [active, setActive] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
        setNavChange(!navChange);
    }
//    const handleNewMenu =()=>{
//     setNavChange(!navChange);
//       setActive(!active)
//    }
    const navigate = useNavigate();
    return (

        <div>
            {navChange ?
                <div>
                    <div className="Header">
                        {openMenu && <Menu />}
                        <div className="Header__menu">
                            <img className="Header__menu__logo" src={logo} alt="logo" onClick={() => { navigate("/") }} />
                            {openMenu ? <img
            className="menuBar"
            src={cancel}
            alt="menu-bar"
            onClick={() => {
                handleMenu()
            }}
          /> : <img
            className="menuBar menuBar-White"
            src={hamburger}
            alt="menu-bar"
            onClick={() => {
             handleMenu()
            }}
          />
          }

                        </div>
                    </div>
                    <div className='Header-lg'>
                        <div className='Header-lg__main'>
                            <img src={logo} alt="" className='logo' onClick={() => { navigate("/") }} />
                            <div className='Header-lg__links'>
                                <p onClick={() => { handleMenu() }}>Features
                                    {
                                        openMenu ?
                                            // <img src={upArrowWhite} alt="icon" />
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 1.5L5.29289 0.792893L6 0.0857864L6.70711 0.792893L6 1.5ZM0.292893 5.79289L5.29289 0.792893L6.70711 2.20711L1.70711 7.20711L0.292893 5.79289ZM6.70711 0.792893L11.7071 5.79289L10.2929 7.20711L5.29289 2.20711L6.70711 0.792893Z" fill="#1E1E1E" />
                                            </svg>
                                            :
                                            <img src={dropdown} alt="icon" />
                                    }
                                </p>
                                <Link to="/faq">
                                    <span>FAQs</span>
                                </Link>
                                <Link to="/contact">
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                            {/* <img src={hamburger} alt="menu" className='menuBar' /> */}
                        </div>
                        {openMenu && <Menu Desktop />}
                    </div>
                </div>
                :
               <div>
                <div className='Nav'>
                    {/* {openMenu && <Menu />} */}
                    <div className='Nav__main'>
                        <img src={`${active ? logo: LogoDark}`} alt="" className='logo' onClick={() => { navigate("/") }} />
                        <div className='Nav__links'>
                            <p onClick={() => { handleMenu() }}>Features
                                {
                                    openMenu ?
                                        <img src={upArrowWhite} alt="icon" />
                                        :
                                        <img src={dropWhite} alt="icon" />
                                }
                            </p>
                            <p>
                                <Link to="/faq">FAQs</Link>
                            </p>
                            <p>
                                <Link to="/contact">Contact Us</Link>
                            </p>
                        </div>
                      
                        {/* {openMenu ? <img
            className="menuBar"
            src={cancel}
            alt="menu-bar"
            onClick={() => {
                handleMenu()
            }}
          /> : <img
            className="menuBar menuBar-White"
            src={menuBar}
            alt="menu-bar"
            onClick={() => {
             handleMenu()
            }}
          />
          }  */}
                    </div>
                   
                    {openMenu && <Menu Desktop />}
                </div>
                <NewMenu/>
             </div>
            }
        </div>
    )
}




export default WaitlistHomeHeader