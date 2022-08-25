import React, { useState } from 'react';
import dropdown from "../../props/icons/down-pointing-arrow-white.svg";
import rightPointer from "../../props/icons/faq-pointer.svg";
import {accordionData} from '../../components/util/accordionData';
import {generalInfo} from '../../components/util/accordionData';
 
    const Accordion =({multiple = false})=>{
        const [open, setOpen]=useState()
        return(
            <div className="accordion">
            {accordionData.map(({ title, content }, idx) => (
            <AccordionItem title={title} content={content} key={idx}   multiple = {multiple} open={open === idx} onToggle={(e)=>
              setOpen((a)=>(a === idx ? "" : idx))
            } />
            ))}
                <div className='g-info'>GENERAL INFORMATION</div>
                {generalInfo.map(({ title, content },  idx) => (
            <AccordionItem title={title} content={content} key={idx + 15} open={open === idx+15} onToggle={(e)=>
                setOpen((a)=>(a === idx+15 ? "" : idx+15))
              }/>
            ))}
            </div>
        )
    };


const AccordionItem = ({ title, content, open, multiple, onToggle })=> {
    const [isActive, setIsActive] = useState(false);
    const isOpen = ()=> (multiple ? "" : open);
    return (
            <div className={`accordion-item  ${isOpen() ? "" : ""} `}  >
                <div className="accordion-title" onClick={() => {
                setIsActive(false);
                onToggle();
            }}>
                    <div className='title'>{title}</div>
                    <div className='pointer'>{isOpen() ? 
                    //  <img src={dropdown} alt="dropdown" /> 
                    <p>+</p> :
                    //    <img src={rightPointer} alt ="pointer"/>
                    <p>-</p>
                     } </div>
                </div>
                {isOpen() && <div className={`accordion-content ${isOpen() ? "active" : ""} `}>{content}</div> }
            </div>
        
    )
};
//accordion-item, accordion-title
export default Accordion;