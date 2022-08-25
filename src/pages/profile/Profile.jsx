import React, { useState } from 'react';
import "./mob_profile.scss";
import Product from '../../components/product/Product';
import verifiedSwapper from "../../props/icons/verified-swapper.svg";
import verifiedStudent from "../../props/icons/verified-tag.svg";
import ratedStar from "../../props/icons/rated-star.svg";
import unratedStar from "../../props/icons/unrated-star.svg";
import info from "../../props/icons/info_light.svg";
import score from "../../props/icons/cancel.svg";
import done from "../../props/icons/satisfactory.svg";
import addProduct from "../../props/icons/Add.svg";
import chatUp from "../../props/icons/Chat_alt_2_fill.svg";
import favourite from "../../props/icons/Star.svg";
import { useNavigate } from 'react-router';
import Footer from '../../components/footer/Footer';
import AddProduct from '../../components/addProduct/AddProduct';
import { useSelector } from 'react-redux';



function Profile({mine}){
    const navigate = useNavigate();
    const [showAP, setShowAP] = useState(false);
    const { user } = useSelector(state => state);

    const handleChatUp = () => {
        navigate("/chat")
    }
    const handleEdit = () =>{
        navigate("/settings")
    }
    const handleAddProduct = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.documentElement.style.overflowY = "hidden";
        document.body.style.overflowY = "hidden";
        setShowAP(true);
    }
  return(
    <div className="Profile">
        {showAP && <AddProduct hide={setShowAP} /> }
        <div className="Profile__hero">

        </div>
        <div className="Profile__user">
            <div className="Profile__user__info">
                <div className="Profile__user__info__img"></div>
                <div className="Profile__user__info__id">
                    <p className="Profile__user__info__id__name">
                        {mine && user? user.kp_fname :"Barnabas Gbiaye"} <img src={verifiedSwapper} alt="verified" className="Profile__user__info__id__name__verified" />
                    </p>
                    <span className="Profile__user__info__id__tags">Swapper</span>
                    <span className="Profile__user__info__id__tags">Student <img src={verifiedStudent} alt="verified" /></span>
                </div>
                {mine &&
                    <p className="Profile__user__info__edit" onClick={handleEdit}>
                        Edit
                    </p>
                }
            </div>
            <div className="Profile__user__rating">
                <p className="Profile__user__rating__score">
                    60% <span>Swap Score</span>
                </p>
                <img src={ratedStar} alt="star"/>
                <img src={ratedStar} alt="star"/>
                <img src={ratedStar} alt="star"/>
                <img src={unratedStar} alt="star"/>
                <img src={unratedStar} alt="star"/>
                {!mine &&
                <div className="Profile__user__rating__cta">
                    <p>Message Swapper</p>
                    <div onClick={handleChatUp}><img src={chatUp} alt="chat up" /></div>
                </div>
                }
            </div>
            <div className="Profile__user__performance">
                <p className="Profile__user__performance__heading">
                    My Performance <img src={info} alt="info" />
                </p>
                <p className="Profile__user__performance__stats">
                    <img src={favourite} alt="" />
                    Fufilment Rate: <span>Excellent</span>
                </p>
                <p className="Profile__user__performance__stats">
                    <img src={score} alt="" />
                    Quality Score: <span>Very Poor</span>
                </p>
                <p className="Profile__user__performance__stats">
                    <img src={done} alt="" />
                    User Rating: <span>Average</span>
                </p>
                {/* {mine &&
                    <span className="Profile__user__performance__more">Show more</span>
                } */}
            </div>
            <h3>{mine? "My Items": "Gbiaye's Items"}</h3>
            <div className="Profile__user__items">
                <Product OTF/>
                <Product/>
                <Product/>
                <Product OTF/>
                <Product/>
                <Product OTF/>
            </div>
            {mine &&
                <img src={addProduct} onClick={handleAddProduct} alt="add" className="Profile__user__add" />
            }
        </div>
        <Footer/>
    </div>
  )
}
export default Profile;