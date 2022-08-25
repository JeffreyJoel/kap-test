import React, { useState } from 'react';
import './mob_chatScreen.scss';
import Header from '../../header/Header';
import pin from "../../../props/icons/Pin_fill.svg";
import Search from "../../../props/icons/Search_chat.svg";
import PinnedMeg from '../../chatcards/pinned/pinnedMeg';
import Drop from '../../../props/icons/Drop.svg';
import RecentMessage from '../../chatcards/recent/recentMessage';
import { useSelector } from 'react-redux';
import ConnectSwappers from '../../../pages/connectSwappers/ConnectSwappers';
import { useEffect } from 'react';
import axios, { token } from "../../../util";

function ChatScreen(){
  const {Auth} = useSelector(state => state);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if(Auth){
      getChats();
    }
  }, [Auth]);

  async function getChats(){
    try {
      const { data } = await axios({
        method: "GET",
        url: "/conversation/chats",
        headers: {
          "x-auth-token": token,
          "Content-Type": "application/json",
        },
      });

      console.log(data);
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  }


  return(
    <div className="ChatScreen">
      <Header Main bs="bs"/>
      { Auth && chats.length !== 0 ? <><div className="ChatScreen__PM">
        <div className='ChatScreen__PM__meta'>
          {/* <span className="__title"> Pinned</span> */}
          <img src={pin} alt="pin" />
        </div>
        <div className="ChatScreen__PM__message">
          <PinnedMeg />
          <PinnedMeg />
          <PinnedMeg />
          <PinnedMeg />
        </div>
        <img src={Drop} alt="drop" className="ChatScreen__PM__drop" />
      </div>
      <div className="ChatScreen__RC">
        <div className="ChatScreen__RC__meta">
          <span className="__title">Recent Chats</span>
          <img src={Search} alt="search RC" />
        </div>
        <div className="ChatScreen__RC__message">
          <RecentMessage />
          <RecentMessage />
          <RecentMessage />
          <RecentMessage />
          <RecentMessage />
          <RecentMessage />
          <RecentMessage />
        </div>
      </div></>: <ConnectSwappers />}
    </div>
  )
}
export default ChatScreen;