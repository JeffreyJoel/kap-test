import React from 'react';
import './mob_homeScreen.scss';
import See from "../../../props/icons/greater.svg"
//import RSlider from '../../slider/RSlider';
import Product from '../../product/Product';
import Header from '../../header/Header';
import Search from '../../search/Search';
import Banner from '../../banner/Banner';
import offer from "../../../props/icons/Iconss.svg"
function HomeScreen(){
  return (
    <div className="HomeScreen">
      <div className="HomeScreen__banner__sticky">
        <Header Main />
        <Search />
      </div>
      <Banner />
      {/* <RSlider/> */}
      <div className="HomeScreen__giveaway">
        <div className="banner">
          <p className="heading">Recommended</p>
          <span>See All</span>
          <span>
            <img src={See} alt="see" />
          </span>
        </div>

        <div className="products">
          <Product OTF />
          <Product />
          <Product />
          <Product />
        </div>
      </div>

      <div className="HomeScreen__day">
        <div className="banner">
          <p className="heading">Discover Swaps</p>
          <span>See All</span>
          <span>
            <img src={See} alt="see" />
          </span>
        </div>
        <div className="products">
          <Product OTF/>
          <Product />
          <Product />
          <Product OTF/>
          
        </div>
      </div>
      <div className="HomeScreen__year">
        <div className="banner">
          <p className="heading">
            Open Offers
            <span>
              <img src={offer} alt="offers" />
            </span>
          </p>
          <span>See All</span>
          <span>
            <img src={See} alt="see" />
          </span>
        </div>
        <div className="products">
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
         
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;