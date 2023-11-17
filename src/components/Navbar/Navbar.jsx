import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom'; //use for active tab

const NavbarComp = () => {
    //use for which tab is active
    let location = useLocation();
    // React.useEffect(() => {
    //   console.log(location.pathname);
    // }, [location]);
    return (
        
        <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">iNoteBook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={`nav-link ${location.pathname==="/"? "active": ""}`} href="/">Home</Nav.Link>
                        <Nav.Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp;
