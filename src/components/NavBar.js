import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
export default function NavBar() {
    

    return(
        
        <Navbar bg="#1d1d1b" variant="dark">
        <Container>
          <Nav className="m-auto" >
            <Nav.Link href="/">Morfning</Nav.Link>
            <Nav.Link href="/arkenollan">ÄrkenØllan</Nav.Link>
            <Nav.Link href="/personal">Personal</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
        
    )
}