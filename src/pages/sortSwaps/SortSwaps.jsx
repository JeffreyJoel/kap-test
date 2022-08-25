import React from 'react';
import cancel from "../../props/icons/Close_round.svg";
import pointer from "../../props/icons/faq-pointer.svg"
import './sortswaps.scss';
import { useNavigate } from 'react-router';




function SortSwaps() {
   const navigate = useNavigate()

    const handleClose = () =>{
        navigate('/')
    }
    // console.log(States[0].name);
    return (
      <div className="SortSwaps">
        <div className="SortSwaps__header">
          <span>
            <img src={cancel} alt="cancel" onClick={handleClose} />
          </span>
          <h3>Sort Swaps</h3>
        </div>
        <div className='SortSwaps__section'>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Women's Fashion</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Men's Fashion</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Kid's & Newborn's fashion</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Children's Products</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Phones & Tablets</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Computers & game consoles</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Electronics</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Health & Beauty</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Appliances</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Pets</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Sports & Recreation</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>For home</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Cottage & Garden</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Leisure & Entertainment</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Construction & Repair</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Auto and Motor</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Leisure & Entertainment</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
            <div className='SortSwaps__section__items'>
                <div>
                    <p className='SortSwaps__section__items__top'>Food</p>
                    <p>23223211 swap ads</p>
                </div>
                <img src={pointer} alt="" />
            </div>
        </div>
      </div>
    );
}

export default SortSwaps
