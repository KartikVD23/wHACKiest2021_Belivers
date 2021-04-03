import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {Navbar,Nav,Button} from 'react-bootstrap';

export default class NavigationBar extends Component {
 
  render() {
    return (
     <div >
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="secondary">
     <Link to="/"><Navbar.Brand href="#home">Gym</Navbar.Brand></Link> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
           <Nav.Link>Features</Nav.Link>
        
        
        <Nav.Link href={"/pricing.jsx"}>Pricing</Nav.Link>
        
       </Nav>
       <Nav>
         <Link to="/admin-login">
       <Button onClick="admin" className="btn" variant="outline-warning" size="sm" onClick="adminpage">Admin-Login</Button>{' '}
       </Link><Link to="member-signup"><Button className="btn" variant="outline-primary" size="sm" href="">Signup</Button>{' '}
       </Link><Link to="member-login"><Button variant="dark" size="sm" href="">Login</Button>{' '}
       </Link>
       </Nav>
   </Navbar.Collapse>
   
   </Navbar>
   
</div>






    );
  }
}
