import React, { useState } from 'react';
import "./Menu.scss";
// import kapitify from '../../props/icons/kapitify_dark.svg';
// import twitter from "../../props/icons/twitter.svg";
// import instagram from "../../props/icons/instagram_menu.svg";
// import facebook from "../../props/icons/facebook.svg";
// import copyright from "../../props/icons/copyright.svg";
// import Img1 from "../../props/icons/menuImg1.svg";
import Img1 from "../../props/icons/features1.svg";
import Img2 from "../../props/icons/features2.svg";
import Img3 from "../../props/icons/features3.svg";
import Img4 from "../../props/icons/features4.svg";
import Img5 from "../../props/icons/features5.svg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setToken } from '../../util';



function Menu({ Auth, Desktop }) {
  const [content, setContent] = useState(false);
  const [conten, setConten] = useState(false);
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();


  const handleLogOut = () => {
    dispatch({
      type: "notAuth"
    });
    dispatch({ type: "logout" });
    setToken(null);
  }
  if (Desktop) {
    return (
      <div className="Menu Desktop">
        <div className="Menu__noAuth">
          {/* <p>
              <Link to="/how-it-works">How it works</Link>{" "}
            </p> */}
          <div className="Menu__noAuth__accordion">
            {/* <div
                className="Menu__noAuth__accordion__title"
                // onClick={() => setContent(!content)}
              >
                <p>Features</p>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L-6.16331e-08 2L1.41 0.589996Z"
                      fill="#000000"
                    />
                  </svg>
                </span>
              </div> */}

            <div className="Menu__noAuth__accordion__content">
              <ul>
                <li className='Img-list'>
                  <img src={Img1} alt="" />
                  <div>
                    <h3>Top User Interface</h3>
                    <p>
                      Interact with one of the industry's premium interface,
                      with fast loading time and swift response systems.
                    </p>
                  </div>
                </li>
                <li className='Img-list'>
                  <img src={Img2} alt="" />
                  <div>
                    <h3>End-to-end encryption</h3>
                    <p>
                      Messages are end-to-end encrypted, no one outside the
                      chat can read them not even Kapitify.
                    </p>
                  </div>
                </li>
                <li className='Img-list'>
                  <img src={Img3} alt="" />
                  <div>
                    <h3>SSL Security</h3>
                    <p>
                      Kapitify has implemented the standard technology for
                      keeping an internet connection secure and safeguarding
                      any sensitive data.
                    </p>
                  </div>
                </li>
                <li className='Img-list'>
                  <img src={Img4} alt="" />
                  <div>
                    <h3>24/7 Customer Support</h3>
                    <p>
                      Contact the customer support instantly and expect swift
                      and proactive replies.
                    </p>
                  </div>
                </li>
                <li className='Img-list'>
                  <img src={Img5} alt="" />
                  <div>
                    <h3>Real-time notifications</h3>
                    <p>
                      Get instant important notifications on your devices even
                      if you're offline
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          {/* <p>
              <Link to="/faq">FAQs</Link>{" "}
            </p>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p> */}
        </div>
      </div>
    )
  }
  else {
    return (
      <>
      <div className="Menu-background"></div>
      <div className="Menu">
        {Auth ? (
          <div className="Menu__Auth">
            <div className="Menu__Auth__user">
              <div className="Menu__Auth__user__img">{user.kp_fname[0]}</div>
              <p className="Menu__Auth__user__name">{user.kp_fname}</p>
            </div>
            <h3 className="Menu__Auth__title">My Profile</h3>
            <div className="Menu__Auth__profile">
              <p>
                <Link to="/profile">My Dashboard</Link>
              </p>
              <p>
                <Link to="/account-setting">Account Settings</Link>
              </p>
              <p>Post An Item</p>
              <p className="pop">Refer your Friends</p>
            </div>
            <div className="Menu__Auth__others">
              <p>Browse Categories</p>
              <div>
                <p>Kapitify Pro</p>
                <p className="cs">Coming Soon</p>
              </div>
              <p>
                <Link to="/how-it-works">How it works</Link>{" "}
              </p>
              <div className="Menu__Auth__accordion">
                <div
                  className="Menu__Auth__accordion__title"
                  onClick={() => setConten(!conten)}
                >
                  <p>Learn</p>
                  <span>
                    <svg
                      width="16"
                      height="32"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L-6.16331e-08 2L1.41 0.589996Z"
                        fill="#000000"
                      />
                    </svg>
                  </span>
                </div>
                {conten && (
                  <div className="Menu__Auth__accordion__content">
                    <ul>
                      <li>
                        <Link to="/blog"> Blog</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <p>
                <Link to="/faq">FAQs</Link>
              </p>
              <p>
                <Link to="/about">About</Link>
              </p>
              <p>
                <Link to="/contact">Contact Us</Link>
              </p>
              <p>
                <Link to="/" onClick={handleLogOut}>Logout</Link>
              </p>
            </div>
            {/* <div className="Menu__footer">
                <img src={kapitify} alt="logo" />
                <div className="copyright">
                  <span>
                    <img src={copyright} alt="cr" />
                  </span>
                  <p>kapitify labs 2022</p>
                </div>
                <div className="socials">
                  <img src={twitter} alt="twitter" />
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                </div>
              </div> */}
          </div>
        ) : (
          
          <div className="Menu__noAuth">
            {/* <p>
                <Link to="/how-it-works">How it works</Link>{" "}
              </p> */}
            <div className="Menu__noAuth__accordion">
              <div
                className="Menu__noAuth__accordion__title"
                onClick={() => setContent(!content)}
              >
                <p>Features</p>
                <span>
                  {content ?
                    <svg width="16" height="16" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1.5L5.29289 0.792893L6 0.0857864L6.70711 0.792893L6 1.5ZM0.292893 5.79289L5.29289 0.792893L6.70711 2.20711L1.70711 7.20711L0.292893 5.79289ZM6.70711 0.792893L11.7071 5.79289L10.2929 7.20711L5.29289 2.20711L6.70711 0.792893Z" fill="#1E1E1E" />
                    </svg> :
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L-6.16331e-08 2L1.41 0.589996Z"
                        fill="#000000"
                      />
                    </svg>

                  }
                </span>
              </div>
              {content && (
                <div className="Menu__noAuth__accordion__content">
                  <ul>
                    <li className='Img-list'>
                      <img src={Img1} alt="" />
                      <div>
                        <h3>Top User Interface</h3>
                        <p>
                          Interact with one of the industry's premium interface,
                          with fast loading time and swift response systems.
                        </p>
                      </div>
                    </li>
                    <li className='Img-list'>
                      <img src={Img2} alt="" />
                      <div>
                        <h3>End-to-end encryption</h3>
                        <p>
                          Messages are end-to-end encrypted, no one outside the
                          chat can read them not even Kapitify.
                        </p>
                      </div>
                    </li>
                    <li className='Img-list'>
                      <img src={Img3} alt="" />
                      <div>
                        <h3>SSL Security</h3>
                        <p>
                          Kapitify has implemented the standard technology for
                          keeping an internet connection secure and safeguarding
                          any sensitive data.
                        </p>
                      </div>
                    </li>
                    <li className='Img-list'>
                      <img src={Img4} alt="" />
                      <div>
                        <h3>24/7 Customer Support</h3>
                        <p>
                          Contact the customer support instantly and expect swift
                          and proactive replies.
                        </p>
                      </div>
                    </li>
                    <li className='Img-list'>
                      <img src={Img5} alt="" />
                      <div>
                        <h3>Real-time notifications</h3>
                        <p>
                          Get instant important notifications on your devices even
                          if you're offline.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* <div className="Menu__noAuth__accordion">
                <div
                  className="Menu__noAuth__accordion__title"
                  onClick={() => setConten(!conten)}
                >
                  <p>Learn</p>
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L-6.16331e-08 2L1.41 0.589996Z"
                        fill="#000000"
                      />
                    </svg>
                  </span>
                </div>
                {conten && (
                  <div className="Menu__noAuth__accordion__content">
                    <ul>
                      <li>
                      <Link to="/blog"> Blog</Link>
                       </li>
                    </ul>
                  </div>
                )}
              </div> */}
            {/* <p>
                <Link to="/about">About</Link>{" "}
              </p> */}
            <p>
              <Link to="/faq">FAQs</Link>{" "}
            </p>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>

            {/* <div className="Menu__footer">
                <img src={kapitify} alt="logo" />
                <div className="copyright">
                  <span>
                    <img src={copyright} alt="cr" />
                  </span>
                  <p>kapitify labs 2022</p>
                </div>
                <div className="socials">
                  <img src={twitter} alt="twitter" />
                  <img src={facebook} alt="facebook" />
                  <img src={instagram} alt="instagram" />
                </div>
              </div> */}
          </div>
        )}
      </div>
      </>
    );
  }

}

export default Menu;
