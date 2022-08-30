import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar bg="dark" variant="dark" expand="lg" className="fixed w-100 navFix">
                <Navbar.Brand href="#home">Benjamin Levy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#schooling">Schooling</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        <App />
    </React.StrictMode>
);
