import React, {useState} from 'react';
import '../../pages/chat/mob_chat.scss';
import attach from "../../props/icons/attach.svg";
import send from "../../props/icons/Send_fill.svg";

function ChatFooter (){
    const [text, setText] = useState("");
    return(
        <div className="Chat__section__footer">
        <div className="Chat__section__footer__message">
            <textarea name="message" id="message" placeholder='Message' value={text} onChange={e => setText(e.target.value)}/>
            <img src={attach} alt="file" />
        </div>
        <div className='Chat__section__footer__send'>
            <img src={send} alt="send"  />
        </div>
        
    </div>
    )
}
export default ChatFooter;