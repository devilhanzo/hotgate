import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" inverse expand="md">
          <NavbarBrand href="https://gw.kkh.go.th/login">KKH Internet Service</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://gw.kkh.go.th/status">Status</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login" activeClassName="active" tag={RRNavLink}>TestLogin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/sessions" activeClassName="active" tag={RRNavLink}>Sessions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://gw.kkh.go.th/logout">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}