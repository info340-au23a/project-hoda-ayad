'use strict'

import React, { useState } from "react";
import {
    Form, Input, Row, Col, Label
} from 'reactstrap'

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
            console.log("Set new role to: ", newVal)
        } else {
            setLocation(newVal);
            props.applyFilterCallback(query, role, newVal);
        }
        
    }

    const roleElems = props.roleOptions.map((role) => {
        return <option key={role} value={role}>{role}</option>
    });
    const locElems = props.locOptions.map((loc) => {
        return <option key={loc} value={loc}>{loc}</option>
    });

    //console.log(query, role, location);

    return (
        <Form className="job-filter-form p-4">
            <Row>
                <Col>
                    <Label 
                        className="visually-hidden"
                        for="search">
                        Search
                    </Label>
                    <Input id="search"
                        placeholder="Search"
                        type="search" 
                        onChange={handleInput}/>
                </Col>
                <Col>
                    <Label 
                        className="visually-hidden"
                        for="role-select">
                        Role
                    </Label>
                    <Input id="role-select"
                        placeholder="All Roles"
                        type="select"
                        onChange={handleSelect}>
                        <option>
                            All Roles
                        </option>
                        {roleElems}
                    </Input>
                </Col>
                <Col>
                    <Label 
                        className="visually-hidden"
                        for="location-select">
                        Location
                    </Label>
                    <Input id="location-select"
                        placeholder="All Locations"
                        type="select"
                        onChange={handleSelect}>
                        <option>
                            All Locations
                        </option>
                        {locElems}
                    </Input>
                </Col>
            </Row>
        </Form>
    )
}