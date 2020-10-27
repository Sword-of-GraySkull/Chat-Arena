import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './TextContainer.css';
import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({ users} ) => (
    <div className="text-container">
        <div className="top-bar"><h3>People currently chatting</h3></div>
        <ScrollToBottom className="participants">
           { users ?
                (users.map(({name}) => 
                    <div key={name} className="participant-item">
                        {name}
                        <img src={onlineIcon} alt="online" className="online-icon"/>
                    </div> ))
            :
            null
           }
        </ScrollToBottom>
    </div>
)

export default TextContainer;