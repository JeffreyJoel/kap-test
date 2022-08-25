import React from 'react';
import Daniel from "../../props/images/Daniel_rounded.png";
import Barnabas from "../../props/images/Barnabas_rounded.png";
import Favour from "../../props/images/Favour_rounded.png";
import "./coreTeam.scss";

function CoreTeam() {

    return (
        <div className='coreTeam'>
            <div>
            <hr />
            <div className='coreTeam_member'>
                <div className='coreTeam_member_img'>
                    <img src={Daniel} alt="" loading='lazy'/>
                </div>
                <div className='coreTeam_member_text'>
                    <p className='name'>Imogirie Daniel</p>
                    <p className='position'>CO-FOUNDER AND CEO</p>
                </div>
            </div>
            </div>
            <div>
            <hr />
            <div className='coreTeam_member'>
                <div className='coreTeam_member_img'>
                    <img src={Barnabas} alt="" loading='lazy'/>
                </div>
                <div className='coreTeam_member_text'>
                    <p className='name'>Gbiaye Barnabas</p>
                    <p className='position'>CO-FOUNDER AND COO</p>
                </div>
            </div>
            </div>
             <div>
            <hr />
            <div className='coreTeam_member'>
                <div className='coreTeam_member_img'>
                    <img src={Favour} alt="" loading='lazy'/>
                </div>
                <div className='coreTeam_member_text'>
                    <p className='name'>Favour Aniogor</p>
                    <p className='position'>LEAD DEVELOPER</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default CoreTeam