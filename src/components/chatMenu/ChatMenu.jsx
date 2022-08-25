import React from 'react';
import "./ChatMenu.scss";

function ChatMenu() {
    return (
      <div className="ChatMenu">
        <ul className="menulist">
          <li className="menu">Report</li>
          <li className="menu">Pin Chat</li>
          <li className="menu">Search</li>
          <li className="menu">View Profile</li>
          <li className="menu">Ping</li>
        </ul>
      </div>
    );
}

export default ChatMenu;
