import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

                <Navbar.Brand href="#home">We Are Poor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}
                    {/* <Nav.Link href="#link">Link</Nav.Link> */}

                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}

                    </Nav>

                    <Form inline>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                    <div variant="outline-success">Yeah That is Right</div>
                    </Form>
                    
                </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}
