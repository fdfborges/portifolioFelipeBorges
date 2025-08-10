import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavResponsive.scss'; // 1. IMPORTAR SEU ARQUIVO SCSS

function NavResponsive({ onScrollTo, secaoRef1, secaoRef2, secaoRef3, secaoRef4 }) {
    return (
        // 2. ADICIONE SUA CLASSE E REMOVA A PROP "bg"
        <Navbar collapseOnSelect className="navbar-custom" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">FELIPE BORGES</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => onScrollTo(secaoRef1)}> Home</Nav.Link>
                        <Nav.Link onClick={() => onScrollTo(secaoRef2)}>Experiência</Nav.Link>
                        <Nav.Link onClick={() => onScrollTo(secaoRef3)}>Projetos</Nav.Link>
                        <Nav.Link onClick={() => onScrollTo(secaoRef4)}>Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavResponsive;