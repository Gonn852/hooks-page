import React from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

const Header = props => {
    return(
            <Navbar>
            <Container>
                <Navbar.Brand style={{color: props.darkMode ? 'white' : 'black'}}>React Hooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                    <Button type="button" onClick={props.onClick} variant={props.darkMode ? 'light' : 'dark'}>{props.darkMode ? 'Dark Mode' : 'Light Mode'}</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
    );
}

export default Header