import { getDatabase, onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import JobFilter from '../components/JobFilter';
import { PostingWindow, PostingsList } from '../components/Postings';
import { Row, Col } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';

function Home(props) {
    const isNotPhone = useMediaQuery({
        query: '(min-width: 600px)'
      })

    // Handle mobile toggle view
    const [viewList, setViewList] = useState(true);
    // Other states
    const [query, setQuery] = useState('');
    const [role, setRole] = useState('All Roles');
    const [location, setLocation] = useState('All Locations');
    const [selectedPosting, setSelectedPosting] = useState(null);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    function applyFilter(query, role, loc) {
        setQuery(query);
        setRole(role);
        setLocation(loc);
        //setSelectedPosting(null);
        setFilteredData(() => {
            const filteredPostings = data.filter((posting) => {
                const nameMatch = (query === '') || ((posting.title.toLowerCase()).includes(query.toLowerCase()));
                const roleMatch = (role === 'All Roles') || (posting.roles.includes(role));
                const locMatch = (loc === 'All Locations') || (loc === posting.location);
                return nameMatch && roleMatch && locMatch;
            });
            return filteredPostings;
        });
    }

    // gets data as an array
    useEffect(() => {
        const db = getDatabase();
        const postingsRef = ref(db, 'postings');

        const unregisterFunction = onValue(postingsRef, (snapshot) => {
            const dataArr = Object.entries(snapshot.val()).map(
                ([key, value]) => ({ id: key, ...value }));;
            
            setData(dataArr);
            // initializes filteredData
            applyFilter(query, role, location);
        })

        function cleanup() {
            unregisterFunction()
        }
        return cleanup;
    })

    
    
    const roleOptions = [...new Set(data.reduce((all, current) => {
        return all.concat(current.roles);
    }, []))].sort();

    const locOptions = [...new Set(data.reduce((all, current) => {
        return all.concat(current.location);
    }, []))].sort();

    function selectPosting(posting) {
        setSelectedPosting(posting);
        setViewList(false);
    }

    function handleBackClick() {
        setViewList(true);
    }

    function clearFilter() {
        setQuery('');
        setRole('All Roles');
        setLocation('All Locations');
    }

    return (
        <div className="page home">
            <JobFilter roleOptions={roleOptions} 
                  locOptions={locOptions}
                  applyFilterCallback={applyFilter}
                  clearFilterCallback={clearFilter}/>
            {isNotPhone ? 
                <Row className='postings-view content-container'>
                    <Col className='p-0 border posting-list-container'>
                        <PostingsList key="postings-list" postings={filteredData} selectPostingCallback={selectPosting}/>
                    </Col>
                    <Col className='p-0 border posting-window'>
                        <PostingWindow key="posting-window" data={selectedPosting} isNotPhone={isNotPhone}/>
                    </Col>
                </Row> :
                <div className='postings-view'>
                    {viewList ? <PostingsList key="postings-list" className='posting-list-container col' postings={filteredData} selectPostingCallback={selectPosting}/>
                    : <PostingWindow key="posting-window" 
                                     data={selectedPosting} handleBackClickCb={handleBackClick} 
                                     isNotPhone={isNotPhone}/>}
                </div>
            }
        </div>
    );
  }
  
  export default Home;