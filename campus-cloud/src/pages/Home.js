'use strict'

import React, { useState } from 'react';
import JobFilter from '../components/JobFilter';
import { PostingWindow, PostingsList } from '../components/Postings';
import { Row, Col } from 'reactstrap';

function Home(props) {
    const [query, setQuery] = useState('');
    const [role, setRole] = useState('All Roles');
    const [location, setLocation] = useState('All Locations');
    const [selectedPosting, setSelectedPosting] = useState(null);
    const [filteredData, setFilteredData] = useState(props.postings);


    
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
        setSelectedPosting(null);
        setFilteredData(() => {
            const filteredPostings = props.postings.filter((posting) => {
                const nameMatch = (query === '') || ((posting.title.toLowerCase()).includes(query.toLowerCase()));
                const roleMatch = (role === 'All Roles') || (posting.roles.includes(role));
                const locMatch = (loc === 'All Locations') || (loc === posting.location);
                return nameMatch && roleMatch && locMatch;
            });
            return filteredPostings;
        });
    }

    function selectPosting(posting) {
        setSelectedPosting(posting);
    }

    function clearFilter() {
        setQuery('');
        setRole('All Roles');
        setLocation('All Locations');
        console.log(query, role, location)
    }

    return (
        <div className="page home">
            <JobFilter roleOptions={roleOptions} 
                  locOptions={locOptions}
                  applyFilterCallback={applyFilter}
                  clearFilterCallback={clearFilter}/>
            <Row className='postings-view'>
                <Col className='p-0 border posting-list-container'>
                    <PostingsList key="postings-list" postings={filteredData} selectPostingCallback={selectPosting}/>
                </Col>
                <Col className='p-0 border'>
                    <PostingWindow key="posting-window" data={selectedPosting}/>
                </Col>
            </Row>
        </div>
    );
  }
  
  export default Home;