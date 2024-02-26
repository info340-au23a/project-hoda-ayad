'use strict'

import React, { useState } from 'react';
import JobFilter from '../components/JobFilter';
import PostingsList from '../components/Postings';

function Home(props) {
    const [query, setQuery] = useState('');
    const [role, setRole] = useState('All Roles');
    const [location, setLocation] = useState('All Locations');
    const [filteredData, setFilteredData] = useState(props.postings);

    
    const filteredPostings = props.postings.filter((posting) => {
        const nameMatch = (query === '') || ((posting.title.toLowerCase()).includes(query.toLowerCase()));
        const roleMatch = (role === 'All Roles') || (role in posting.roles);
        const locMatch = (location === 'All Locations') || (location === posting.location);
        return nameMatch && roleMatch && locMatch;
    });

    
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
        setFilteredData(filteredPostings);
    }

    

    return (
        <div className="home">
            <JobFilter roleOptions={roleOptions} 
                  locOptions={locOptions}
                  applyFilterCallback={applyFilter}/>
            
            <PostingsList postings={filteredData}/>
        </div>
    );
  }
  
  export default Home;