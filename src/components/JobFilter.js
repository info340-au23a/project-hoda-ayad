'use strict'

import React, { useState } from "react";
import {
    Form, Input, Label, Button, InputGroup
} from 'reactstrap'
import { FaRegTrashAlt } from "react-icons/fa";

export default function JobFilter(props) {

    const [query, setQuery] = useState('');
    const [role, setRole] = useState('All Roles');
    const [location, setLocation] = useState('All Locations');

    function handleInput(event) {
        setQuery(event.target.value);
        props.applyFilterCallback(event.target.value, role, location);
    }

    function handleSelect(event) {
        const newVal = event.target.value;
        if (event.target.id === "role-select") {
            setRole(newVal); 
            props.applyFilterCallback(query, newVal, location);
        } else {
            setLocation(newVal);
            props.applyFilterCallback(query, role, newVal);
        }
        
    }

    function handleClear() {
        setQuery('');
        setLocation('All Locations');
        setRole('All Roles'); 
        props.applyFilterCallback('', 'All Roles', 'All Locations');
    }

    const roleElems = props.roleOptions.map((role) => {
        return <option key={role} value={role}>{role}</option>
    });
    const locElems = props.locOptions.map((loc) => {
        return <option key={loc} value={loc}>{loc}</option>
    });

    

    return (
        <Form className={`job-filter-form p-4 d-flex flex-
                                        ${props.isNotPhone ? 'column' : 'row'}`}>
                <InputGroup>
                    <Label 
                        className="visually-hidden"
                        for="search">
                        Search
                    </Label>
                    <Input id="search"
                        placeholder="Search"
                        type="search" 
                        value={query}
                        onChange={handleInput}/>
                </InputGroup>
                <InputGroup>
                    <Label 
                        className="visually-hidden"
                        for="role-select">
                        Role
                    </Label>
                    <Input id="role-select"
                        placeholder="All Roles"
                        type="select"
                        value={role}
                        onChange={handleSelect}>
                        <option>
                            All Roles
                        </option>
                        {roleElems}
                    </Input>
                </InputGroup>
                <InputGroup>
                    <Label 
                        className="visually-hidden"
                        for="location-select">
                        Location
                    </Label>
                    <Input id="location-select"
                        placeholder="All Locations"
                        type="select"
                        value={location}
                        onChange={handleSelect}>
                        <option>
                            All Locations
                        </option>
                        {locElems}
                    </Input>
                </InputGroup>
                <InputGroup className="px-0">
                    <Button onClick={handleClear} aria-label='clear'>
                        <FaRegTrashAlt/>
                    </Button>
                </InputGroup>
            
        </Form>
    )
}