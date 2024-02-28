'use strict'

import React from 'react';
import { InboxHeader, MessageCard, MessageHeader, Converse, SendMessage } from '../components/Chat.js';

function Chat(props) {
    return (
      <div className="page chat">
        this is the chat page
        <main>
        <div id="inbox"> 

          <div id="list-viewer">
            < InboxHeader />
            <div className="message-list">
              < MessageCard data={props} />
            </div>
          </div>

          <div className="middle-right">
            <MessageHeader data={props} />
            <div className="messaging">
              < Converse data={props} />
            </div>
            <SendMessage />
          </div>  

        </div>
        </main>
      </div>
    );
  }

  MessageCard
  MessageHeader
  Converse
  SendMessage
  
  export default Chat;