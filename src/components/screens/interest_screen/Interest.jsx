import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../header/Header';
import InterestItem from '../../interestItem/InterestItem';
import "./mob_Interest.scss";

function Interest() {
    const [items, setItems] = useState(0);
    const {products} = useSelector(state => state);

    useEffect(() => {
      if(products){setItems(products?.length);}
    },[products])

    return (
      <div className="Interest">
        <Header Main bs="bs" />
        <div className="Interest__body">
          <div className="Interest__body__heading">
            <p>My Interests</p>
            <p>{items} Item{ (items > 1 && "s") || (items === 0 && "s")}</p>
          </div>
          <div className="Interest__body__items">
            {items > 0 ? (
              <>
                {products?.map((prd, index) => (<InterestItem key={index}/>))}
              </>
            ) : (
              <p className="empty">Your interests will show here</p>
            )}
          </div>
        </div>
      </div>
    );
}

export default Interest;
