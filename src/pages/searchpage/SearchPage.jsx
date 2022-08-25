import React from 'react';
import "../../components/screens/home_screen/mob_homeScreen.scss";
import Product from '../../components/product/Product';
import Header from "../../components/header/Header";
import Search from '../../components/search/Search';
import Banner from '../../components/banner/Banner';
import "./searchPage.scss";

function SearchPage(){
  return (
    <div className="HomeScreen SearchPage">
      <div className="HomeScreen__banner__sticky ">
        <Header Main />
        <Search />
        <Banner/>
      </div>
      <div className="HomeScreen__giveaway">


        <div className="products">
        <Product OTF />
        <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
          <Product OTF />
        </div>
      </div>
    </div>
  );
}
export default SearchPage;