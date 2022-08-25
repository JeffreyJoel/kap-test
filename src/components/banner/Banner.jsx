import React from 'react';
import './mob_banner.scss';
import gpsIcon from '../../props/icons/Gps_fixed.svg';
import sortIcon from '../../props/icons/Menu.svg';
//import bannerImg from '../../props/images/banner-img.jpg';
import RSlider from '../slider/RSlider';
import { useNavigate } from 'react-router';

function Banner(){
  const navigate = useNavigate()

  const handleLocation = ()=>{
    navigate('/location');
  }

  return(
    <div className="Banner">
        <RSlider/>
        <div className="Banner__buttons">
            <div className="Banner__buttons__location"
              onClick={handleLocation}
            >
                <span><img src={gpsIcon} alt="location" /></span> 
                Location   
            </div>
            <div className="Banner__buttons__sort" onClick={()=>{
              navigate("/sort-swaps")
            }}>
                <span><img src={sortIcon} alt="Sort" /></span> 
                Sort
            </div>
        </div>
        
    </div>
  )
}
export default Banner;