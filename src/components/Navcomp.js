import React from 'react';
import Nav from 'react-bootstrap/Nav'


function Navcomp() {
  if (!localStorage.name) {
    return (
      <Nav
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Events">Events</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">login</Nav.Link>
        </Nav.Item>
      </Nav>
    );

  }
  else {
    return (
      <Nav
        activeKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Events">Events</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/login">logout</Nav.Link>
        </Nav.Item>
      </Nav>
    );

  }

}


export default Navcomp;