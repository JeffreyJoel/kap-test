import React from 'react';
import './mob_productpage.scss';
import Header from "../../components/header/Header";
import phone from "../../props/images/iphone.png";
import ratedStar from "../../props/icons/rated-star.svg";
import unratedStar from "../../props/icons/unrated-star.svg";
import chatUp from "../../props/icons/Chat_alt_2_fill.svg";
import map_pin from "../../props/icons/Map_pin.svg";
import right from "../../props/icons/Expand_right.svg";
import Review from '../../components/review/Review';
import { useNavigate } from 'react-router';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import { useDispatch } from 'react-redux';

function ProductPage(){
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleChatUp = () => {
        navigate("/chat")
    };
    const checkProfile = () => {
        navigate("/swapper/@gbiaye")
    };
    const handleSwap = () =>{
      dispatch({
        type: "preamble"
      });
      navigate("/chat");
    }
  return (
    <div className="ProductPage">
      <div className="ProductPage__header">
        <Header Main />
      </div>
      <div className="ProductPage__product">
        <img src={phone} alt="img" className="ProductPage__product__img" />
        <div className="ProductPage__product__info">
          <p className="ProductPage__product__info__name">
            Iphone Xr - Swap for Laptop
          </p>
          <button className="ProductPage__product__info__cta" onClick={handleSwap}>Swap</button>
        </div>
        <p className="ProductPage__product__location">
          <img src={map_pin} alt="map" />
          <span>Benin City, Edo State</span>
        </p>
        <div className="ProductPage__product__desc">
          <h3 className="ProductPage__product__desc__heading">Description</h3>
          <p className="ProductPage__product__desc__detail">
            iphone X Swap for working laptop with processor of at least core i5
            and 8gb ram with internal memory 500gb or more...
          </p>
          <span>Show more</span>
        </div>
      </div>
      <div className="ProductPage__aswapper">
        <h3 className="ProductPage__aswapper__heading">About swapper</h3>
        <div className="ProductPage__aswapper__info" onClick={checkProfile}>
          <div className="ProductPage__aswapper__info__img"></div>
          <div className="ProductPage__aswapper__info__meta">
            <p className="ProductPage__aswapper__info__meta__name">
              Barnabas Gbiaye
            </p>
            <p className="ProductPage__aswapper__info__meta__role">Swapper</p>
          </div>
          <img src={right} alt="right" />
        </div>
        <div className="ProductPage__aswapper__rating">
          <p className="ProductPage__aswapper__rating__score">
            60% <span>Swap Score</span>
          </p>
          <div className="ProductPage__aswapper__rating__star">
            <img src={ratedStar} alt="star" />
            <img src={ratedStar} alt="star" />
            <img src={ratedStar} alt="star" />
            <img src={unratedStar} alt="star" />
            <img src={unratedStar} alt="star" />
          </div>
          <div className="ProductPage__aswapper__rating__cta">
            <p>Message Swapper</p>
            <div onClick={handleChatUp}>
              <img src={chatUp} alt="chat up" />
            </div>
          </div>
        </div>
      </div>
      <div className="ProductPage__reviews">
        <h3>Swapper Reviews</h3>
        <div className="ProductPage__reviews__block">
          <Review />
          <hr />
          <Review />
          <span>more</span>
        </div>
      </div>
      <div className="ProductPage__MoreItems">
        <h3>More Items</h3>
        <div className="ProductPage__MoreItems__Product">
          <Product OTF />
          <Product />
          <Product />
          <Product OTF />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ProductPage;