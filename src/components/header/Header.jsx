import React, { useState } from 'react';
import logo from '../../props/icons/kap-logo.svg';
import hamburger from "../../props/icons/hamburger.svg";
import cancel from "../../props/icons/Close_round.svg";
import dropdown from "../../props/icons/drop_down.svg";
import './header.scss';
import avatar from "../../props/icons/User_cicrle.svg";
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import menuBar from '../../props/icons/menuBar-white.svg';
import LogoDark from '../../props/icons/kapLogo-white.svg';
import dropWhite from '../../props/icons/dropWhite.svg';
import NewMenu from '../NewMenu/NewMenu';
// import Waitlist from '../../pages/waitlist/Waitlist';


function Header({ Main, auth, bs, Waitlist }) {
  const [openMenu, setOpenMenu] = useState(false);
  const { Auth } = useSelector(state => state);
  const navigate = useNavigate()

  const handleMenu = () => {
    setOpenMenu(!openMenu);

  }
  if (Main) {
    return (
      <div className={`Header__home ${bs} ${openMenu && "bs"}`}>
        {openMenu && <Menu Auth={Auth} />}
        <div className={`Header__home__menu`}>
          {openMenu ? <img
            className="Header__home__menu__bar"
            src={cancel}
            alt="menu-bar"
            onClick={(e) => {
              handleMenu();
              const parentNode = e.target.parentNode.parentNode.parentNode;
              if (parentNode.className === "ProductPage__header") {
                parentNode.style.filter = "drop-shadow(0px 3px 12px rgba(0, 0, 0, 0.071))";
              } else {
                parentNode.style.boxShadow = "0px -10px 20px #707070";
              }
            }}
          /> : <img
            className="Header__home__menu__bar"
            src={hamburger}
            alt="menu-bar"
            onClick={(e) => {
              handleMenu();
              const parentNode = e.target.parentNode.parentNode.parentNode;
              if (parentNode.className === "ProductPage__header") {
                parentNode.style.filter = "none";
              } else {
                parentNode.style.boxShadow = "none";
              }

            }}
          />}
          <img className="Header__home__menu__logo" src={logo} alt="logo" onClick={() => { navigate("/") }} />
          {Auth ? (
            <img
              src={avatar}
              className="Header__home__menu__avatar"
              alt="avatar"
            />
          ) : (
            <Link to="/register">
              <span>Join</span>
            </Link>
          )}
        </div>
        <div className='Header-lg'>
          <div className='Header-lg__main'>
            <img src={logo} alt="" className='logo' onClick={() => { navigate("/") }} />
            <div className='Header-lg__links'>
              <p onClick={() => { handleMenu() }}>Features</p>
              <Link to="/faq">
                <span>FAQs</span>
              </Link>
              <Link to="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
            <img src={hamburger} alt="menu" className='menuBar' />
          </div>
          {openMenu && <Menu Desktop Auth={Auth} />}
        </div>
      </div>
    );
  };

  if (Waitlist) {
    return (
      <div className='Nav'>
        {openMenu && <Menu />}
        <div className='Nav__main'>
          <img src={LogoDark} alt="" className='logo' onClick={() => { navigate("/") }} />
          <div className='Nav__links'>
            <p onClick={() => { handleMenu() }}>Features <img src={dropWhite} alt="icon" /></p>
            <p>
              <Link to="/faq">FAQs</Link>
            </p>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>
          {/* <NewMenu Normal={true}/> */}
          {/* <img src={menu} alt="menu" className='menuBar' 
            onClick={()=>{handleMenu()}}/> */}
          {openMenu ? <img
            className="menuBar"
            src={cancel}
            alt="menu-bar"
            onClick={() => {
              handleMenu();
            }}
          /> : <img
            className="menuBar"
            src={menuBar}
            alt="menu-bar"
            onClick={() => {
              handleMenu();
            }}
          />}

        </div>
        {openMenu && <Menu Desktop />}
      </div>
    )
  }

  else {
    return (
      <div>
        <div className="Header">
           {/*
          {openMenu && <Menu Auth={Auth} />}
          <div className="Header__menu">
            <img className="Header__menu__logo" src={logo} alt="logo" onClick={() => { navigate("/") }} />
            {/* <img
                className="Header__menu__bar"
                src={hamburger}
                alt="menu-bar"
                onClick={handleMenu}
              /> *
            {openMenu ? <img
              className="Header__home__menu__bar"
              src={cancel}
              alt="menu-bar"
              onClick={() => {
                handleMenu();
              }}
            /> : <img
              className="Header__home__menu__bar"
              src={hamburger}
              alt="menu-bar"
              onClick={() => {
                handleMenu();
              }}
            />}
            {/* <NewMenu  Normal={true}/> 
          </div>*/}
           <NewMenu/>
        </div> 
       

        <div className='Header-lg'>
          <div className='Header-lg__main'>
            <img src={logo} alt="" className='logo' />
            <div className='Header-lg__links'>
              <p onClick={() => { handleMenu() }}>Features
                <img src={dropdown} alt="icon" />
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
          {openMenu && <Menu Desktop Auth={Auth} />}
        </div>
      </div>
    );
  }
}

export default Header;
