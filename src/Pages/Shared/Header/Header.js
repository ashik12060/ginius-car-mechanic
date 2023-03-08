import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="nav-style" sticky="top" collapseOnSelect expand="lg" >
                <Container className="con">
                    <Navbar.Brand href="#home"><h1 className="text-danger fs-1 ">Genius</h1></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end header-style">
                        <Nav.Link as={HashLink} to="/home#home"><span className="text-danger fs-4 ">Home</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services"><span className="text-danger fs-4">Services</span></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts"><span className="text-danger fs-4">Experts</span></Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light"><span className="text-danger fs-4">Logout</span></Button> :
                            <Nav.Link as={Link} to="/login"><span className="text-danger fs-4">Login</span></Nav.Link>}
                        <Navbar.Text>
                            <span className="text-success fs-6">Signed in as: </span> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;