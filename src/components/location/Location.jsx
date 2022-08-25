import React from 'react';
import './location.scss';
import cancel from "../../props/icons/Close_round.svg";
import { States } from '../../util';
import Select from '../forms/select/Select';
import { useNavigate } from 'react-router';



function Location() {
    const navigate = useNavigate()

    const handleCancel = () => {
        navigate('/');
    }
    console.log(States[0].name);
    return (
        <div className="Location">
            <div className="Location__header">
                <span>
                    <img src={cancel} alt="cancel" onClick={handleCancel} />
                </span>
                <h3>Add Location</h3>
            </div>
            <div className='Location__text'>
                <h3>Enter Location</h3>
                <p>Put in the location you’re currently in to see swaps around you</p>
            </div>
            <form className="Location__form" action='/'>
                <div className="Location__form__location">
                    <Select payloads={States} />
                    <div className="Location__form__location__textInp">
                        <label for="city">city</label>
                        <input type="text" name="city" />
                    </div>
                </div>
                <button className="Location__ form__save" onClick={handleCancel()}>Save</button>
            </form>
        </div>
    );
}

export default Location
