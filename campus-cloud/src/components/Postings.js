'use strict'

import React, { useState } from "react";
import { Card, CardSubtitle, CardTitle, CardText,
         Row, Col, Badge, Button, Accordion, AccordionHeader, AccordionBody, AccordionItem } from 'reactstrap';

export function PostingWindow({ data }) {
    let windowContent = <SelectPrompt />;
    if (data !== undefined) {
        windowContent = <PostingView data={data}/>;
    }

    return (
        <Card className="p-4 text-start" style={{minHeight:'100%'}}>
            {windowContent}
        </Card>
    )
}


export function PostingsList(props) {

    const postingCards = props.postings.map((posting) => <PostingCard key={posting.title} data={posting}/>)

    return (
        <div className="postings">
            {postingCards}
        </div>
    )
}

function PostingCard({ data }) {
    const roleBadges = data.roles.map((role) => <Badge pill>{role}</Badge>)

    return (
        <Card className="p-4 text-start">
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
    const roleBadges = data.roles.map((role) => <Badge pill>{role}</Badge>)

    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        } else {
        setOpen(id);
        }
    };

    return (
        <div>
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
        <h2>Select a Job Listing to View</h2>
    )
}