'use strict'
import React, { Link, useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

function NavBar({ setSignInCB }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function handleLogOut() {
      setSignInCB(false);
    }

    return (
      <div className="nav-bar">
        <Navbar expand="md">
            <NavbarBrand href="/">Campus Cloud</NavbarBrand>
            
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/splash">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/chat">
                            Chat
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/profile">Profile</NavLink>
                    </NavItem>
                </Nav>
                
                  <NavLink href="/" onClick={handleLogOut}>Log Out</NavLink>
                
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;