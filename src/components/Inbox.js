'use strict'
import React from "react";
import { Button, Input, InputGroup } from "reactstrap";

export function InboxHeader() {
    return (
        <div id="inbox-heading">
            <h4>Inbox</h4> 
            <div className="compose-message">
                <a href="#">
                    <i className="fa fa-pen-to-square" aria-label="compose-message"></i>
                </a>
            </div>
            <div id="search-bar-formating">
                <InputGroup>
                    <Input id="search-bar" placeholder="Search Inbox"/>
                    <Button className="btn" color="success"> 
                        search 
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}

function MessageCard(person) {
    let altText = "profile picture for " + person.name;
    let sampleMsg = person.convo[person.convo.length-1];
    let upTo = sampleMsg.length;
    if (sampleMsg.length >= 50) {
        if (sampleMsg.length > 53) {
            upTo = 53;
        }
        sampleMsg = sampleMsg.substring(2, upTo) + "...";
    } else {
        sampleMsg = sampleMsg.substring(2, upTo);
    }
    
    let msgDate = person.endPoint[person.endPoint.length-1].date;
    return (
        <div className="message-card" key={person.name}>
            <div id="profile-icon">
                <img id="profile-pic" src={person.profilePic} alt={altText} />
                <p>{person.name}</p> 
            </div>
            <span id="title">{person.title}</span>
            <p>{sampleMsg}</p>
            <div className="last-text-date">
                <time dateTime={msgDate}>
                    <p>{msgDate}</p>
                </time>
            </div>
        </div>
    );
}

export function MessageCardRow({data}) {
    const row = data.map((person) => MessageCard(person));
    return (
        <div className="message-list"> 
            { row }
        </div>);
}

export function MessageHeader({data, name}) {
    const who = data.filter((person) => person.name === name);
    return (
        <div className="message-heading" key="message-heading">
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

export function Converse({data, name}) {
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

export function SendMessage() {
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

/*

<main>
<div id="inbox"> // hard code
    <div id="list-viewer"> // hard code
    **** Open {InboxHeader} ****
        <div id="inbox-heading"> // header function that puts this together
            <h4>Inbox</h4> 
            <div class="compose-message">
                <a href="#">
                    <i class="fa fa-pen-to-square" aria-label="compose-message"></i>
                </a>
            </div>
            <div id="search-bar-formating">
                <input id="search-bar" placeholder="Search Inbox"></input>
            </div>
        </div> //Closing #inbox-heading
    **** Close {InboxHeader} ****
        <div class="message-list"> //hard code
    **** Open {MessageCard} ****
            <div class="message-card">
                <div id="profile-icon">
                    <img id="profile-pic" src={profilePic} alt="profile picture for "{name}>
                    <p>{ name }</p> 
                </div>
                <span id="title">{UW student}</span>
                <p>{start of last text}</p>
                <div class="last-text-date">
                    <time datetime={date}><p>{date}</p></time>
                </div>
            </div> // closing message-card
    **** Close {MessageCard} ****
        </div> // closing message-list
    </div> // closing list-viewer
    
    <div class="middle-right"> // hard code
    **** Open {MessageHeader} ****
        <div class="message-heading">
            <h3>{name}</h3>
            <h4>University of Washington Student</h4>
        </div> // closing message-heading
    **** Close {MessageHeader} ****
        <div class="messaging"> // hard code
    **** Open {Converse} ****
            <time datetime="2024-2-12" id="date">Mon, Feb 12, 2024</time>
            <div class="other-messages">
                <div id="profile-icon">
                    <img id="profile-pic" src="img/blankpfp.jpg" alt="profile">
                </div>
                <div class="message">
                    <p>Hi Jane Doe! <br>I am also a thrid-year undergraduate student at the University of Washington. I am also really interested in using AI in a healthcare setting. I have an idea for a startup that I would love to run by you.</p>
                </div>
            </div> // close other-message
            
            <div class="my-messages">
                <div class="message">
                    <p>Hi John Doe, Thank you for reaching out. Are you availible to meet at Suzzallo Starbucks on Tuesday to discuss your idea? </p>
                </div>
                <div id="profile-icon">
                    <img id="profile-pic" src="img/blankpfp.jpg" alt="profile">
                </div>
            </div> // close my-messages    
    **** Close {Converse} ****
        </div> // close messaging
    **** Open {SendMessage} ****
        <div id="draft-wrapper">
            <div id="draft-message">
                <input class="to-send" placeholder="type your message...">
                <button type="button" class="btn">Send</button>
            </div>
        </div>
    **** Close {SendMessage} ****              
    </div> // Close middle-right
</div> // Close inbox
</main>

*/