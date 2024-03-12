import React, { useEffect, useState } from 'react';
import { InboxHeader, MessageCardRow, ChatWindow } from '../components/Inbox.js';
import { Col, Row } from 'reactstrap';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useMediaQuery } from 'react-responsive';


function Chat(props) {
  const isNotPhone = useMediaQuery({
    query: '(min-width: 600px)'
  })

  const [viewList, setViewList] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);

  function applyFilter(query) {
    setQuery(query);
    setFilteredData(() => {
        const filteredPostings = data.filter((chat) => {
            const nameMatch = (query === '') || ((chat.name.toLowerCase()).includes(query.toLowerCase()));
            return nameMatch ;
        });
        return filteredPostings;
    });
  }

  // gets data as an array
  useEffect(() => {
    const db = getDatabase();
    const chatRef = ref(db, 'chat');

    const unregisterFunction = onValue(chatRef, (snapshot) => {
        const dataArr = Object.entries(snapshot.val()).map(
            ([key, value]) => ({ id: key, ...value }));;
        
        setData(dataArr);
        // initializes filteredData
        applyFilter(query);
    })

    function cleanup() {
        unregisterFunction()
    }
    return cleanup;
  })


  function selectConversation(convo) {
    setSelectedChat(convo);
    setViewList(false);
  }

  function handleBackClick() {
    setViewList(true);
  }

  function clearFilter() {
    setQuery('');
  }

    return (
      <div className="page chat">
        {isNotPhone ? 
          <Row className='inbox-view content-container'>
            <Col className='p-0 border posting-list-container'>
              < InboxHeader applyFilterCallback={applyFilter} clearFilterCallback={clearFilter} />
              < MessageCardRow key="message-list" message={filteredData} selectConvoCallback={selectConversation} />
            </Col>
            <Col className='p-0 border posting-window'>
              <ChatWindow key="chat-window" data={selectedChat} isNotPhone={isNotPhone}/>
            </Col>
          </Row> :
            <div className="inbox-view">
              {
                viewList ? 
                  <div className='posting-list-container col' >
                    < InboxHeader applyFilterCallback={applyFilter} clearFilterCallback={clearFilter} />
                    < MessageCardRow key="message-list" message={filteredData} selectConvoCallback={selectConversation} />
                  </div>
                : <ChatWindow key="posting-window" data={selectedChat} handleBackClickCb={handleBackClick} isNotPhone={isNotPhone}/>} 
            </div> 
        }
      </div>
    );
  }


  
  export default Chat;
