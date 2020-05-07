import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Route} from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Route>
            <Navbar bg="light" variant="light">
                <Navbar.Brand ><img
                    src="https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                alt="logo"/> </Navbar.Brand>
                <Container className="justify-content-end">
                <Nav>
                <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="#/Aboutme">About me</Nav.Link>
                <Nav.Link href="#/Projects">Projects</Nav.Link>
                <Nav.Link href="#/Skills">Skills</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </Route>
        </div>

    )
}

export default Header;