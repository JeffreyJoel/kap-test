import React from 'react';
import './pinnedMesg.scss';
import user from '../../../props/images/user.png';


function PinnedMeg(){
  return(
    <div className="PinnedMeg">
        <div className="PinnedMeg__userInfo">
          <img src={user} alt="avatar" className="PinnedMeg__userInfo__img" />
          <p className="PinnedMeg__userInfo__name">
            Mike Wazowski
          </p>
        </div>
        <p className="PinnedMeg__message">
          That's awesome! ...
        </p>
    </div>
  )
}
export default PinnedMeg;