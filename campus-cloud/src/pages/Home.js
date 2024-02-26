'use strict'

import React, { useState } from 'react';
import JobFilter from '../components/JobFilter';
import { PostingWindow, PostingsList } from '../components/Postings';
import { Row, Col } from 'reactstrap';

function Home(props) {
    const [query, setQuery] = useState('');
    const [role, setRole] = useState('All Roles');
    const [location, setLocation] = useState('All Locations');
    const [filteredData, setFilteredData] = useState(props.postings);

    
    // const filteredPostings = props.postings.filter((posting) => {
    //     const nameMatch = (query === '') || ((posting.title.toLowerCase()).includes(query.toLowerCase()));
    //     const roleMatch = (role === 'All Roles') || (role in posting.roles);
    //     const locMatch = (location === 'All Locations') || (location === posting.location);
    //     return nameMatch && roleMatch && locMatch;
    // });

    
    const roleOptions = [...new Set(props.postings.reduce((all, current) => {
        return all.concat(current.roles);
    }, []))].sort();

    const locOptions = [...new Set(props.postings.reduce((all, current) => {
        return all.concat(current.location);
    }, []))].sort();

    function applyFilter(query, role, loc) {
        setQuery(query);
        setRole(role);
        setLocation(loc);
        setFilteredData(() => {
            const filteredPostings = props.postings.filter((posting) => {
                const nameMatch = (query === '') || ((posting.title.toLowerCase()).includes(query.toLowerCase()));
                const roleMatch = (role === 'All Roles') || (posting.roles.includes(role));
                const locMatch = (loc === 'All Locations') || (location === posting.location);
                return nameMatch && roleMatch && locMatch;
            });
            return filteredPostings;
        });
    }

    

    return (
        <div className="home">
            <JobFilter roleOptions={roleOptions} 
                  locOptions={locOptions}
                  applyFilterCallback={applyFilter}/>
            <Row style={{minHeight:'100%'}}>
                <Col className='p-0' style={{minHeight:'100%'}}>
                    <PostingsList key="postings-list" postings={filteredData}/>
                </Col>
                <Col className='p-0' style={{minHeight:'100%'}}>
                    <PostingWindow key="posting-window" data={filteredData[0]}/>
                </Col>
            </Row>
        </div>
    );
  }
  
  export default Home;