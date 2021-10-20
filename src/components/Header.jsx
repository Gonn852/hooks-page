import React, {useContext} from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext';

const Header = props => {
    const darkMode = useContext(ThemeContext)
    return(
            <Navbar>
            <Container>
                <Navbar.Brand style={{color: darkMode ? 'white' : 'black'}}>React Hooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                    <Button type="button" onClick={props.onClick} variant={darkMode ? 'light' : 'dark'}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
    );
}

export default Header