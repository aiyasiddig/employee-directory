import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class Nav extends Component {

  render() {
    return (
      <searchProvider>
      <ReactBootstrap.Navbar bg="dark" variant="dark" className = "navbar">
        <ReactBootstrap.Navbar.Brand className = "title"><h2>Employee Directory</h2></ReactBootstrap.Navbar.Brand>
      </ReactBootstrap.Navbar>
      </searchProvider>
    )
  }
}

export default Nav;
