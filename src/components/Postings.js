'use strict'

import React, { useState } from "react";
import { Card, CardSubtitle, CardTitle, CardText,
         Row, Col, Badge, Button, Accordion, AccordionHeader, AccordionBody, AccordionItem } from 'reactstrap';

export function PostingWindow({ data }) {
    let windowContent = <SelectPrompt />;
    if (data !== null) {
        windowContent = <PostingView data={data}/>;
    }

    return (
        <Card className="p-4 text-start" style={{minHeight:'100%', border:'none', overflowY:'hidden'}}>
            {windowContent}
        </Card>
    )
}


export function PostingsList(props) {

    function handleClick(posting) {
        props.selectPostingCallback(posting);
    }

    const postingCards = props.postings.map((posting) => <PostingCard data={posting} 
                                                                      onClick={() => handleClick(posting)}/>)

    return (
        <div className="postings">
            {postingCards}
        </div>
    )
}

function PostingCard({ data, onClick }) {
    const roleBadges = data.roles.map((role) => <Badge className="m-1" pill>{role}</Badge>)

    return (
        <Card className=" text-start" onClick={() => onClick(data)} style={{border:'none', 
                                                                               borderBottom:'solid lightgray 2px', 
                                                                               borderRadius:'0',
                                                                               padding:'2em',
                                                                               paddingLeft:'4em'}}>
            <div className="mb-2">
                {roleBadges}
            </div>
            <CardTitle tag='h5'>
                {data.title}
            </CardTitle>
            <CardSubtitle className="mb-3">
                {data.poster} - {data.location}
            </CardSubtitle>
            <CardText>
                {data.shortdesc}
            </CardText>
        </Card>
    )
}

function PostingView({ data }) {
    const roleBadges = data.roles.map((role) => <Badge className="m-1"pill>{role}</Badge>)

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };

    return (
        <div className="p-4 px-5">
            <div className="mb-2">
                {roleBadges}
            </div>
            <CardTitle tag='h1'>
                {data.title}
            </CardTitle>
            <CardSubtitle className="mb-3">
                {data.poster} - {data.location}
            </CardSubtitle>
            <CardText className="short-desc">
                {data.shortdesc}
            </CardText>
            <CardText className="long-desc">
                {data.longdesc}
            </CardText>
            <Accordion open={open} toggle={toggle} className="pb-4">
                <AccordionItem>
                    <AccordionHeader targetId="quals">
                        Qualifications
                    </AccordionHeader>
                    <AccordionBody accordionId="quals">
                        list of reqs
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="progress">
                        Current Progress
                    </AccordionHeader>
                    <AccordionBody accordionId="progress">
                        progress description
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            <Row className="buttons text-center">
                <Col>
                    <Button>
                        Apply Now
                    </Button>
                </Col>
                <Col>
                    <Button>
                        Message
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

function SelectPrompt(props) {
    return (
        <h2 className="text-center">Select a Job Listing to View</h2>
    )
}