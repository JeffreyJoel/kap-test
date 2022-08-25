import React from 'react';
import './waitlistHome.scss';
import phones from '../../props/icons/waitlistPhones.svg';
export default function Phones(){
    return(
        <div>
        <img src={phones} alt="" className='phones floatAnimation' />
        </div>
    )
}