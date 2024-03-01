'use strict'

import React from 'react';
import { InboxHeader, MessageCardRow, MessageHeader, Converse, SendMessage } from '../components/Inbox.js';

function Chat(props) {
    return (
      <div className="page chat">
        <main>
        <div id="inbox"> 
        
          <div id="list-viewer">
            < InboxHeader />
            <div className="message-list">
              < MessageCardRow data={props.chats} />
            </div>
          </div>

          <div className="middle-right">
            <MessageHeader data={props.chats} name="Dog Doggerton" />
            <Converse data={props.chats} name="Dog Doggerton" />
            <div className="subDiv">
              <SendMessage />
            </div>
            
          </div> 

        </div>
        </main>
      </div>
    );
  }


  
  export default Chat;