import React, { useState, useEffect, useCallback } from 'react';
import "./footer.scss";
import homeIcon from '../../props/icons/Home_gray.svg';
import chatIcon from '../../props/icons/Message_dark.svg';
import orderIcon from '../../props/icons/Heart.svg';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function Footer() {
  const navigate = useNavigate();
  const { products } = useSelector(state => state);
  const [footerPop, setFooterPop] = useState(true);
  const checkActive = (e) => {
    console.log(e.target.id);
    navigate(`/?${e.target.id}`)
  }
  

  const [y, setY] = useState(window.scrollY);

  const FooterPopUp = useCallback(
    e => {
      // window.addEventListener("touchstart", () => {
      //   setFooterPop(!footerPop)
      // });
      const window = e.currentTarget;
      if (y > window.scrollY) {
        //console.log("scrolling up");
        setFooterPop(false)
      } else if (y < window.scrollY) {
        //console.log("scrolling down");
        setFooterPop(true)
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", FooterPopUp);

    return () => {
      window.removeEventListener("scroll", FooterPopUp);
    };
  }, [FooterPopUp]);

  return (
    <div>
      <div className={` ${footerPop ? "Fhide" : "Footer"}`}>
        <div>
          {/* <span class="notification-count msg">6</span> */}
          <img onClick={checkActive} id={0} src={chatIcon} alt="Chats" className="divIcons" /> </div>
        <div> <img onClick={checkActive} id="1" src={homeIcon} alt="Home" className="divIcons" /></div>
        <div>
          {products && <span class="notification-count">{products}</span>}
          <img onClick={checkActive} id="2" src={orderIcon} alt="Order" className="divIcons" /></div>
      </div>

    </div>
  )
}
export default Footer;