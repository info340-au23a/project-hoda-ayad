'use strict'

import React, { useState } from 'react';
import JobFilter from '../components/JobFilter';

function Home(props) {
    const [query, setQuery] = useState('');
    const [role, setRole] = useState('All Roles');
    const [location, setLocation] = useState('All Locations');

    const filteredPostings = props.postings.filter((posting) => {
        const nameMatch = (query === '') || (query in posting.title);
        const roleMatch = (role === 'All Roles') || (role in posting.roles);
        const locMatch = (location === 'All Locations') || (location === posting.location);

        return nameMatch && roleMatch && locMatch;
    });

    const roleOptions = [...new Set(props.postings.reduce((all, current) => {
        return all.concat(current.role);
    }, []))].sort();

    const locOptions = [...new Set(props.postings.reduce((all, current) => {
        return all.concat(current.loc);
    }, []))].sort();

    function applyFilter(query, role, loc) {
        setQuery(query);
        setRole(role);
        setLocation(loc);
    }

    return (
      <div className="home">
       this is the home page
       <JobFilter roleOptions={roleOptions} 
                  locOptions={locOptions}
                  applyFilterCallback={applyFilter}/>
      </div>
    );
  }
  
  export default Home;