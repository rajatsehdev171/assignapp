import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="white" light expand="sm" className="mb-5 shadow-sm p-3 mb-5 bg-white rounded">
          <Container>
            <NavbarBrand href="/" >MY AWESOME SHOP</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="">
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">
                    ABOUT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">
                    CONTACT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">
                    BAG
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;