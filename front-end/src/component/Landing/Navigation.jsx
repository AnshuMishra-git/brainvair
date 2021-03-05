import React from 'react'
import { Nav, Navbar, Button, NavDropdown, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Landing.css"

export default function Navigation() {
    return (
        <React.Fragment>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand id="site_Heading" >Brain Vire </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Form inline>
                        <Button as={Link} to="/" className="m-1" variant="outline-success">Fabonicci</Button>{' '}
                        <Button as={Link} to="/pg" className="m-1" variant="outline-primary">pandC</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
