import React from 'react';
import { useState } from 'react';
import dropdown from "../../../props/icons/Expand_left.svg";
import './Select.scss';

function Select({payloads}) {
    const [options,] = useState(payloads);
    const [showOptions, setShowOptions] = useState(false);
    const [choice, setChoice] = useState("")

    const handleOptions = (e) => {
        setShowOptions(!showOptions);
        setChoice(e.name);
        console.log(choice)
    }

  return <div className='Select'>
    <label for="state">State</label>
    <div id="state">
    <img src={dropdown} alt="dropdown" onClick={() => setShowOptions(!showOptions)}/>
    <p>{choice} </p>
    
    </div>
    {showOptions && <div className="Select__options">
        {options?.map((option, index) => (
            <p key={index} onClick={() => handleOptions(option)}>
                {option.name}
            </p>
        ))}
    </div>}
  </div>;
}

export default Select;
