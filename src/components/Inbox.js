
import React, { useState } from "react";
import { Card, CardSubtitle, CardTitle, CardText, Label, Form, Button, Input, InputGroup } from "reactstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


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
        <div id="inbox-heading" className="col-header">
            <h4>Inbox</h4> 
            <Form id="search-bar-form">
                <Label 
                    className="visually-hidden"
                    for="search-bar">
                        Search
                </Label>
                <InputGroup>
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
    if (sampleMsg.length >= 50) {
        if (sampleMsg.length > 53) {
            upTo = 53;
        }
        sampleMsg = sampleMsg.substring(2, upTo) + "...";
    } else {
        sampleMsg = sampleMsg.substring(2, upTo);
    }
    
    let msgDate = data.endPoint[data.endPoint.length-1].date;
    return (

        <Card className=" text-start" onClick={() => onClick(data)} style={{border:'none', 
                                                                            borderBottom:'solid lightgray 2px', 
                                                                            borderRadius:'0',
                                                                            padding:'2em',
                                                                            paddingLeft:'4em'}}>
            <CardTitle tag='h5'>
                <img id="profile-pic" style={{border:'none', borderRadius:'50%',  textAlign:'start', maxWidth:'3em', maxHeight:'3em'}} src={data.profilePic} alt={altText} /> {data.name}
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

    const messagingCards = props.message.map((person) => <MessageCard key={person.name} data={person} onClick={() => handleClick(person)}/>);
    
    return (
        <div className="message-list"> 
            { messagingCards }
        </div>
    );
}

// Right Messaging Window

function MessageHeader({data, name}) {
    const who = data.filter((person) => person.name === name);
    return (
        <div className="message-heading col-heading" key="message-heading">
            <h3>{name}</h3>
            <h4>{who[0].title}</h4>
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
            <div id="profile-icon">
                <img id="profile-pic" src={profilePhoto}alt="profile" />
            </div>
        </div>
    );
}

function OtherResponse(index, msg, profilePhoto) {
    let uniqueKey = "O" + index;
    return (
        <div className="other-messages" key={uniqueKey}>
            <div id="profile-icon">
                <img id="profile-pic" src={profilePhoto} alt="profile" />
            </div>
            <div className="message">
                <p>{msg}</p>
            </div>
        </div>
    )
}

 function Converse({data, name}) {
    const person = data.filter((person) => person.name === name);
    let index = -1;
    const conversation = person[0].convo.map((msg) => {
        let who = msg.substring(0, 1);
        msg = msg.substring(2, msg.length)
        index++;
        if(who === "O") {
            return OtherResponse(index, msg, person[0].profilePic);
        } else if (who === "M") {
            return UserResponse(index, msg, person[0].profilePic);
        }
    });
    return (
        <div className="messaging">
            {conversation}
        </div>
    );
}

function SendMessage() {
    return (
        <div id="draft-wrapper">
            <InputGroup className="draft-message">
                <Input 
                    id="messageBox"
                    name="send"
                    placeholder="type your message..."
                    className="to-send"
                    />
                <Button color="success" className="btn">
                    Send
                </Button>
            </InputGroup>
        </div>
    )
}

function SelectPrompt(props) {
    return (
        <h2 className="text-center">Select a Conversation to View</h2>
      )
}

function ConversationView({ data }) {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    }
    return (
        <>
            <MessageHeader data={data.chats} name={data.name} />
            <Converse data={data.chats} name={data.name} />
            <div className="subDiv">
              <SendMessage />
            </div>
        </>
    );
  }

export function ChatWindow({ data, handleBackClickCb, isNotPhone }) {
    let windowContent = <SelectPrompt />;
    if (data !== null) {
        windowContent = <ConversationView key={data.name} data={data} />;
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