import React, { useState, useEffect } from 'react';
import './mob_chat.scss';
import back from "../../props/icons/back.svg";
import more from "../../props/icons/More.svg";
import attach from "../../props/icons/attach.svg";
import send from "../../props/icons/Send_fill.svg";
import user from "../../props/images/user.png";
import Message from '../../components/chatcards/messages/message';
import { useNavigate } from 'react-router-dom';
import ChatMenu from '../../components/chatMenu/ChatMenu';
import Warning from '../../components/chatcards/warning/Warning';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Chat(){
    const history = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [text, setText] = useState("");
    const {preamble} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if(preamble){
            setText(preamble);
            dispatch({
                type: "disable"
            });
            document.querySelector('textarea').focus();
        }
    }, [dispatch, preamble])
   
    document.body.addEventListener("click", (e)=>{
        if (
          e.target.className === "Chat__section__header__more" ||
          e.target.className === "ChatMenu" ||
          e.target.className === "menulist" ||
          e.target.className === "menu"
        ) {
          setShowMenu(true);
        } else {
          setShowMenu(false);
        }
    });

    const handleBack = (e) =>{
        e.preventDefault();
        history(-1);
    };
    const handleChatMenu = () => {
        setShowMenu(true);
    };

    const sendMessage = () => {
        if(text.length !== 0){

        }
    }
  return(
    <div className="Chat">
        <div className="Chat__section">
            <div className="Chat__section__header">
                <img src={back} alt="back" className='Chat__section__header__back' onClick={handleBack} />
                <img src={user} alt="" className="Chat__section__header__avatar" />
                <p className="Chat__section__header__name">
                    George Emeagwai
                </p>
                <div className="Chat__section__header__menu">
                    <img src={more} onClick={handleChatMenu} alt="more" className="Chat__section__header__more" />
                    { showMenu && <ChatMenu />}
                </div>
                
            </div>
            <div className="Chat__section__body">
                <Warning />
                <Message />
                <Message reverse />
            </div>
            <div className="Chat__section__footer">
                <div className="Chat__section__footer__message">
                    <textarea name="message" id="message" placeholder='Message' value={text} onChange={e => setText(e.target.value)}/>
                    <img src={attach} alt="file" />
                </div>
                <div className='Chat__section__footer__send'>
                    <img src={send} alt="send"  onClick={sendMessage}/>
                </div>
                
            </div>
        </div>
    </div>
  )
}
export default Chat;