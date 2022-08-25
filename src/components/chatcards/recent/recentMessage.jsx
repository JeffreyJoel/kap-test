import React from 'react';
import './rc.scss';
import user from '../../../props/images/user.png';
import { useNavigate } from 'react-router-dom';

function RecentMessage(){
    const navigate = useNavigate();

  const handleChat = (e) => {
    navigate("/chat")
    e.preventDefault()
  }
  return(
    <div className="RecentMessage" onClick={handleChat}>
        <img src={user} alt="pic" className="RecentMessage__img" />
        <div className="RecentMessage__meta">
            <div className="RecentMessage__meta__author">
                <p className="RecentMessage__meta__author__name">
                    Darlene Steward
                </p>
                <span className="RecentMessage__meta__author__time">
                    18:31
                </span>
            </div>
            <div className="RecentMessage__meta__message">
                <p className="RecentMessage__meta__message__detail">
                    Pls take a look at the images
                </p>
                <p className="RecentMessage__meta__message__no">
                    5
                </p>
            </div>
        </div>
    </div>
  )
}
export default RecentMessage;