
import React, { useState } from "react";
import { Card, CardSubtitle, CardTitle, CardText,
         Row, Col, Badge, Button, Accordion, AccordionHeader, AccordionBody, AccordionItem } from 'reactstrap';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";



export function PostingWindow({ data, handleBackClickCb, isNotPhone }) {
    let windowContent = <SelectPrompt />;
    if (data !== null) {
        windowContent = <PostingView key={data.title} data={data}/>;
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


export function PostingsList(props) {

    function handleClick(posting) {
        props.selectPostingCallback(posting);
    }

    const postingCards = props.postings.map((posting) => <PostingCard key={posting.title}
                                                                      data={posting} 
                                                                      onClick={() => handleClick(posting)}/>)

    return (
        <div className="postings-list-container">
            {postingCards}
        </div>
    )
}

function PostingCard({ data, onClick }) {
    function getBadgeColor(role) {
        if (role === 'Graphic Designer'
            || role === 'Engineer' ) {
            return 'primary';
        }
        else {
            return 'secondary';
        }
    }

    const roleBadges = data.roles.map((role) => <Badge color={getBadgeColor(role)} className={`m-1`} pill>{role}</Badge>)

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
                    <Link to='chat' className='btn btn-secondary'>
                        Message
                    </Link>
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