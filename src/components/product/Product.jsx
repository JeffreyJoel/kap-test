import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import mapIcon from '../../props/icons/Map_pin.svg';
import iphone from '../../props/images/iphone.png';
import { setLikedprd } from '../../util';
import './product.scss';

function Product( { OTF }){
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const {products} = useSelector(state => state);
    const dispatch = useDispatch();

    const goToProduct = (e) => {
        navigate("/product/iphone-xr");
        console.log(e.target)
    };

    const handleLike = () => {
      
      if(!liked){
        console.log("Clockw")
        
        const prd = {
          name: "Iphone Xr",
          swap: `${OTF ? "Anything": "Laptop"}`,
          img: {iphone}
        };
        if(products){
          const newprd = products;
          newprd.push(prd);
          dispatch({
            type: "add__product",
            products: newprd
          });
          setLikedprd(products);
        }else{
          const newprd = [];
          newprd.push(prd);
          dispatch({
            type: "add__product",
            products: newprd
          });
          setLikedprd(products);
        }

        
        
      }
      setLiked(!liked);
    }

  return (
    <div className="Product" >
      {/* { OTF &&
        <svg
          width="96"
          height="26"
          viewBox="0 0 96 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="OTF"
        >
          <path d="M6 26L0 20H6V26Z" fill="#04233F" />
          <rect width="96" height="20" fill="#06335B" />
          <path
            d="M18.52 9.5C18.49 11.52 20.07 13.17 22.16 13.14C24.25 13.17 25.83 11.52 25.8 9.5C25.83 7.49 24.25 5.82 22.16 5.86C20.07 5.82 18.49 7.49 18.52 9.5ZM24.47 9.5C24.47 10.91 23.53 11.95 22.16 11.95C20.79 11.95 19.85 10.91 19.85 9.5C19.85 8.09 20.79 7.05 22.16 7.05C23.53 7.05 24.47 8.09 24.47 9.5ZM32.3603 10.46C32.3603 8.88 31.3703 7.77 30.0203 7.77C29.2503 7.77 28.5703 8.13 28.2803 8.73V7.91H27.0803V15H28.3003V12.22C28.6103 12.79 29.2603 13.14 30.0203 13.14C31.3703 13.14 32.3603 12.03 32.3603 10.46ZM31.1103 10.46C31.1103 11.39 30.5503 12.03 29.6803 12.03C28.8103 12.03 28.2503 11.39 28.2503 10.46C28.2503 9.51 28.8103 8.88 29.6803 8.88C30.5503 8.88 31.1103 9.53 31.1103 10.46ZM38.2747 10.82C38.2947 10.66 38.3047 10.5 38.3047 10.35C38.3047 8.8 37.2947 7.77 35.8247 7.77C34.2947 7.77 33.2447 8.9 33.2447 10.48C33.2447 12.07 34.3247 13.14 35.9447 13.14C36.8747 13.14 37.6547 12.79 38.1347 12.16L37.4047 11.44C37.0347 11.87 36.5647 12.08 35.9847 12.08C35.1447 12.08 34.6147 11.63 34.4847 10.82H38.2747ZM34.4847 9.99C34.6147 9.26 35.0847 8.83 35.8347 8.83C36.5647 8.83 37.0347 9.24 37.0847 9.99H34.4847ZM44.1227 9.7C44.1227 8.47 43.4627 7.77 42.3527 7.77C41.5827 7.77 40.9627 8.12 40.6827 8.69V7.91H39.4827V13H40.7027V10.08C40.7027 9.33 41.1827 8.89 41.9327 8.89C42.6027 8.89 42.9027 9.24 42.9027 10.01V13H44.1227V9.7ZM48.1155 11.51C48.1155 12.59 48.6555 13.08 49.8055 13.08C50.1555 13.08 50.4855 13.03 50.7955 12.94V11.91C50.5655 11.96 50.3155 11.99 50.0655 11.99C49.5455 11.99 49.3355 11.82 49.3355 11.35V8.98H50.7755V7.91H49.3355V6.41H48.1155V7.91H47.1555V8.98H48.1155V11.51ZM51.5064 10.46C51.5064 11.94 52.5964 13.14 54.1864 13.14C55.8064 13.14 56.8664 11.94 56.8664 10.46C56.8664 8.97 55.8064 7.77 54.1864 7.77C52.5964 7.77 51.5064 8.97 51.5064 10.46ZM55.6164 10.46C55.6164 11.39 55.0564 12.03 54.1864 12.03C53.3164 12.03 52.7564 11.39 52.7564 10.46C52.7564 9.51 53.3164 8.88 54.1864 8.88C55.0564 8.88 55.6164 9.51 55.6164 10.46ZM59.9927 10.46C59.9927 11.94 61.0827 13.14 62.6727 13.14C64.2927 13.14 65.3527 11.94 65.3527 10.46C65.3527 8.97 64.2927 7.77 62.6727 7.77C61.0827 7.77 59.9927 8.97 59.9927 10.46ZM64.1027 10.46C64.1027 11.39 63.5427 12.03 62.6727 12.03C61.8027 12.03 61.2427 11.39 61.2427 10.46C61.2427 9.51 61.8027 8.88 62.6727 8.88C63.5427 8.88 64.1027 9.51 64.1027 10.46ZM66.9248 13H68.1448V8.98H69.5148V7.91H68.1448V7.35C68.1448 6.86 68.3748 6.65 68.9248 6.65C69.0948 6.65 69.2948 6.67 69.5248 6.71V5.68C69.2648 5.62 68.9848 5.59 68.6948 5.59C67.4848 5.59 66.9248 6.16 66.9248 7.25V7.91H65.9448V8.98H66.9248V13ZM70.9483 13H72.1683V8.98H73.5383V7.91H72.1683V7.35C72.1683 6.86 72.3983 6.65 72.9483 6.65C73.1183 6.65 73.3183 6.67 73.5483 6.71V5.68C73.2883 5.62 73.0083 5.59 72.7183 5.59C71.5083 5.59 70.9483 6.16 70.9483 7.25V7.91H69.9683V8.98H70.9483V13ZM79.0559 10.82C79.0759 10.66 79.0859 10.5 79.0859 10.35C79.0859 8.8 78.0759 7.77 76.6059 7.77C75.0759 7.77 74.0259 8.9 74.0259 10.48C74.0259 12.07 75.1059 13.14 76.7259 13.14C77.6559 13.14 78.4359 12.79 78.9159 12.16L78.1859 11.44C77.8159 11.87 77.3459 12.08 76.7659 12.08C75.9259 12.08 75.3959 11.63 75.2659 10.82H79.0559ZM75.2659 9.99C75.3959 9.26 75.8659 8.83 76.6159 8.83C77.3459 8.83 77.8159 9.24 77.8659 9.99H75.2659ZM83.4039 7.89C83.2739 7.84 83.1239 7.82 82.9639 7.82C82.2739 7.82 81.7139 8.17 81.4639 8.76V7.91H80.2639V13H81.4839V10.49C81.4839 9.45 81.9339 8.98 82.8439 8.98C83.0039 8.98 83.1939 9 83.4039 9.03V7.89ZM83.9355 12.17C84.4055 12.77 85.2555 13.14 86.2555 13.14C87.5855 13.14 88.3855 12.51 88.3855 11.48C88.3855 10.75 87.9655 10.28 86.9255 10.05L86.0455 9.84C85.5255 9.72 85.3355 9.58 85.3355 9.33C85.3355 9.01 85.6255 8.81 86.1855 8.81C86.7355 8.81 87.2255 9 87.6555 9.37L88.3055 8.58C87.8655 8.07 87.1055 7.77 86.2155 7.77C84.9255 7.77 84.1155 8.41 84.1155 9.37C84.1155 10.09 84.5855 10.57 85.6255 10.81L86.4555 11C86.9655 11.12 87.1655 11.29 87.1655 11.56C87.1655 11.89 86.8355 12.1 86.2655 12.1C85.6155 12.1 84.9955 11.84 84.5955 11.4L83.9355 12.17Z"
            fill="white"
          />
        </svg>
      } */}
      <img className="Product__image" src={iphone} alt="prd" onClick={goToProduct}/>
      <div className="Product__details" >
        <div className="Product__details__info" onClick={goToProduct}>
          <p className="Product__details__info__name">
            Iphone Xr -<br /> <span>Swap</span> For { OTF? "Anything" : "Laptop" }
          </p>
          <p className="Product__details__info__location" onClick={goToProduct}>
            <img src={mapIcon} alt="map" />
            <span>Benin City, Edo State</span>
          </p>
        </div>
        <div className="like" onClick={handleLike}>
          <svg
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.97812 14.1946L10.8315 21.1925C11.1232 21.4903 11.2691 21.6393 11.4487 21.6578C11.4828 21.6613 11.5171 21.6613 11.5511 21.6578C11.7308 21.6393 11.8766 21.4903 12.1683 21.1925L19.0217 14.1946C20.7688 12.4107 20.9848 9.63055 19.5341 7.59821L19.026 6.8864C17.1864 4.30915 13.2401 4.71741 11.967 7.61669C11.7884 8.02345 11.2114 8.02345 11.0328 7.61669C9.75974 4.71741 5.81344 4.30915 3.97381 6.8864L3.46573 7.59821C2.01506 9.63056 2.23101 12.4107 3.97812 14.1946Z"
              fill="#333333"
              stroke="#333333"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Product;