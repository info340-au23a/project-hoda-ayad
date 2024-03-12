
import React, { useState } from "react";
import { Card, CardSubtitle, CardTitle, CardText, Label, Form, Button, Input, InputGroup } from "reactstrap";
import { FaArrowLeftLong } from "react-icons/fa6";


export function InboxHeader(props) {
    const [query, setQuery] = useState('');

    function handleInput(event) {
        setQuery(event.target.value);
        props.applyFilterCallback(event.target.value);
    }

    function handleClear() {
        setQuery('');
        props.applyFilterCallback('');
    }

    return (
        <div className="inbox-heading" id="col-header">
            <h4>Inbox</h4> 
            <Form id="search-bar-form">
                <Label 
                    className="visually-hidden"
                    for="search-bar">
                        Search
                </Label>
                <InputGroup className="search-inbox">
                    <Input id="search-bar" placeholder="Search Inbox" type="search" value={query} onChange={handleInput}/>
                    <Button onClick={handleClear} className="btn" color="success"> 
                        search 
                    </Button>
                </InputGroup>
            </Form>
        </div>
    )
}

function MessageCard({data, onClick}) {
    let altText = "profile picture for " + data.name;
    let sampleMsg = data.convo[data.convo.length-1];
    let upTo = sampleMsg.length;
    if (sampleMsg.length >= 45) {
        if (sampleMsg.length > 45) {
            upTo = 45;
        }
        sampleMsg = sampleMsg.substring(2, upTo) + "...";
    } else {
        sampleMsg = sampleMsg.substring(2, upTo);
    }
    
    let msgDate = data.endPoint[data.endPoint.length-1].date;
    return (

        <Card className="text-start" onClick={() => onClick(data)} style={{border:'none', 
                                                                            borderBottom:'solid lightgray 2px', 
                                                                            borderRadius:'0',
                                                                            padding:'2em',
                                                                            paddingLeft:'4em'}}>
            <CardTitle tag='h5'>
                <img className="profile-pic" style={{border:'none', borderRadius:'50%',  textAlign:'start', maxWidth:'3em', maxHeight:'3em'}} src={data.profilePic} alt={altText} /> {data.name}
            </CardTitle>
            <CardSubtitle className="mb-3">
                {data.title}
            </CardSubtitle>
            <CardText>
                {sampleMsg}
            </CardText>
        </Card>
    );
}

export function MessageCardRow(props) {
    function handleClick(convo) {
        props.selectConvoCallback(convo);
    }

    const messagingCards = props.message.map((person) => <MessageCard key={person.name} data={person} onClick={() => handleClick(person)}/>)
    
    return (
        <div className="message-list"> 
            {messagingCards}
        </div>
    )
}

// Right Messaging Window

function MessageHeader({data}) {

    return (
        <div className="message-heading col-heading" key="message-heading">
            <h3>{data.name}</h3>
            <h4>{data.title}</h4>
        </div>
    )
}

function UserResponse(index, msg, profilePhoto) {
    let uniqueKey = "M" + index;
    return (
        <div className="my-messages" key={uniqueKey}>
            <div className="message">
                <p>{ msg }</p>
            </div>
            <div className="profile-icon">
            <img className="profile-pic" style={{border:'none', borderRadius:'50%',  textAlign:'start', maxWidth:'3rem', maxHeight:'3rem'}} src={profilePhoto} alt="profile photo"/>
            </div>
        </div>
    );
}

function OtherResponse(index, msg, profilePhoto) {
    let uniqueKey = "O" + index;
    return (
        <div className="other-messages" key={uniqueKey}>
            <div className="profile-icon">
            <img className="profile-pic" style={{border:'none', borderRadius:'50%',  textAlign:'start', maxWidth:'3rem', maxHeight:'3rem'}} src={profilePhoto} alt="profile photo" />
            </div>
            <div className="message">
                <p>{msg}</p>
            </div>
        </div>
    )
}

 function Converse({data}) {
    let index = -1;
    const conversation = data.convo.map((msg) => {
        let who = msg.substring(0, 1);
        msg = msg.substring(2, msg.length)
        index++;
        if(who === "O") {
            return OtherResponse(index, msg, data.profilePic);
        } else if (who === "M") {
            return UserResponse(index, msg, data.profilePic);
        }
    });
    return (
        <div className="messaging">
            {conversation}
        </div>
    );
}

function SendMessage({db, person}) {
   /*
    const [query, setQuery] = useState('');

    function handleInput(event) {
        setQuery(event.target.value);
    }

    function handleSend() {
        const message = "M " + query;
        update(db, "")
        setQuery('');
    }
    */
    return (
        <div className="draft-wrapper">
            <InputGroup className="draft-message" style={{bottom:'0px'}}>
                <Input 
                    id="messageBox"
                    name="send" /* value={query} onChange={handleInput} */
                    placeholder="type your message..."
                    className="to-send"
                    />
                <Button /* onClick={handleSend} */color="success" className="btn">
                    Send
                </Button>
            </InputGroup>
        </div>
    )
}

function SelectPrompt() {
    return (
        <h2 className="text-center">Select a Conversation to View</h2>
      )
}

function ConversationView({ data, db }) {
    return (
        <>
            <MessageHeader data={data} />
            <Converse data={data} />
            <div className="subDiv">
              <SendMessage db={db} person={data.name} />
            </div>
        </>
    );
  }

export function ChatWindow({data, handleBackClickCb, isNotPhone, db}) {
    let windowContent = <SelectPrompt />;
    if (data !== null) {
        windowContent = <ConversationView key={data.name} data={data} db={db} />;
    }

    function handleBack() {
        handleBackClickCb();
    }

    const styling = {
        minHeight:'100%', 
        border:'none'
    }


    return (
        <Card className="p-4 text-start" style={styling}>
            {isNotPhone ? <></> : <div onClick={handleBack}><FaArrowLeftLong /></div>}
            {windowContent}
        </Card>
    )
}