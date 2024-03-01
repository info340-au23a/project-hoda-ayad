

import React from 'react';
import { InboxHeader, MessageCardRow, MessageHeader, Converse, SendMessage } from '../components/Inbox.js';
import { Col, Row } from 'reactstrap';

function Chat(props) {
    return (
      <div className="page chat">
        
        <Row id="inbox"> 
        
          <Col id="list-viewer">
            < InboxHeader />
            
              < MessageCardRow data={props.chats} />
            
          </Col>

          <Col className="middle-right">
            <MessageHeader data={props.chats} name="Dog Doggerton" />
            <Converse data={props.chats} name="Dog Doggerton" />
            <div className="subDiv">
              <SendMessage />
            </div>
            
          </Col> 

        </Row>
     
      </div>
    );
  }


  
  export default Chat;