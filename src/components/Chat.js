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
                <input id="search-bar" placeholder="Search Inbox"></input>
            </div>
        </div>
    )
}

export function MessageCard({data}) {
    const temp = [<h1 key="one">HIII</h1>, <h1 key="two">HI THERE</h1>];
    return temp;

    /*

                    <div class="message-card">
                        <!-- profile pic -->
                        <div id="profile-icon">
                            <img id="profile-pic" src={profilePic} alt="profile picture for "{name}>
                            <p>{ name }</p> 

                        </div>
                        <span id="title">{UW student}</span>
                        <!-- name, identifier, last message snippet -->
                        <p>{start of last text}</p>
                            <!-- date of last text -->
                        <div class="last-text-date">
                            <time datetime={date}><p>{date}</p></time>
                        </div>
                    </div>

    */
}

export function MessageHeader({data}) {
    const name = data
    return (
        <div className="message-heading">
            <h3>{data.name}</h3>
            <h4>{data.title}</h4>
        </div>
    )
}


export function Converse({data}) {
    const temp = [<h1 key="one">HIII</h1>, <h1 key="two">HI THERE</h1>];
    return temp;
    /*

     <!-- users-contact intro -->
                    <div class="other-messages">
                        <div id="profile-icon">
                            <img id="profile-pic" src="img/blankpfp.jpg" alt="profile">
                        </div>
                        <div class="message">
                            <p>Hi Jane Doe! <br>I am also a thrid-year undergraduate student at the University of Washington. I am also really interested in using AI in a healthcare setting. I have an idea for a startup that I would love to run by you.</p>
                        </div>
                    </div>

                    <!-- user response -->
                    <div class="my-messages">
                        <div class="message">
                            <p>Hi John Doe, Thank you for reaching out. Are you availible to meet at Suzzallo Starbucks on Tuesday to discuss your idea? </p>
                        </div>
                        <div id="profile-icon">
                            <img id="profile-pic" src="img/blankpfp.jpg" alt="profile">
                        </div>
                    </div>

    */
}

export function SendMessage(props) {
    return (
        <InputGroup className="draft-message">
            <Input 
                id="messageBox"
                name="send"
                placeholder="type your message..."
                className="to-send"
                />
            <Button>
                Send
            </Button>
        </InputGroup>
    )
}

// export function SendMessage() {
//     return (
//         <div id="draft-wrapper">
//             <div id="draft-message">
//                 <input className="to-send" placeholder="type your message..."></input>
//                 <button type="button" className="btn">Send</button>
//             </div>
//         </div>
//     );
// }


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