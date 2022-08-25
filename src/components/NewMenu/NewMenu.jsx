import React, { useState, useEffect } from 'react';
import './NewMenu.scss';
import logo from '../../props/icons/kapLogo-white.svg';

import { useNavigate } from 'react-router-dom';
// import '../menu/Menu.scss';
import Menu from '../menu/Menu';
// import hamburger from "../../props/icons/hamburger.svg";
// import Img1 from "../../props/icons/features1.svg";
// import Img2 from "../../props/icons/features2.svg";
// import Img3 from "../../props/icons/features3.svg";
// import Img4 from "../../props/icons/features4.svg";
// import Img5 from "../../props/icons/features5.svg";
// import { Link } from 'react-router-dom';
import logoLight from '../../props/icons/kap-logo.svg';
// import menuBar from '../../props/icons/menuBar-white.svg';
// import cancel from "../../props/icons/Close_round.svg";

function NewMenu() {
  const navigate = useNavigate()

  const handleHome =()=>{
    navigate('/')
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (

    <div className="viewport">
      <header className="header" role="banner">
        <nav id="nav" className={`nav ${isMenuOpen ? "nav--open" : ""}`} role="navigation">
          <div className="nav__menu" id="menu" tabindex="-1" aria-label="main navigation" >

            <Menu />

          </div>

          <div className='nav__toggleCover'>

            <img src={`${isMenuOpen ? logoLight : logo}`} alt="logo" className='waitlistHeaderLogo logo' onClick={handleHome} />
            <img src={`${isMenuOpen ? logoLight : logoLight}`} alt="logo" className='regHeaderLogo logo' onClick={handleHome} />

            <a href="#nav" className={` nav__toggle ${isMenuOpen ? "" : ""}`} role="button" aria-expanded={isMenuOpen} aria-controls="menu"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen)

              }}
            >
              <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                <title>Toggle Menu</title>
                <g>
                  <line className="menuicon__bar" x1="13" y1="16.5" x2="30" y2="16.5" />
                  <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
                  <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
                  <line className="menuicon__bar" x1="13" y1="32.5" x2="22" y2="32.5" />
                  {/* <circle className="menuicon__circle" r="23" cx="25" cy="25" /> */}
                </g>
              </svg>
            </a>
          </div>

          <div className="splash"></div>

        </nav>

      </header>

    </div>
  )
};

export default NewMenu