import React, { Component } from 'react';
import "./HeaderMenu.css";
import LogoImg from "../../assets/ryzenradeonLogo.png";
import { NavLink as Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand
} from 'reactstrap';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="lg">
          {/* This is the logo */}
          <NavbarBrand tag={Link} to="/">
            <img src={LogoImg} alt="Ryzen logo" width="40%" style={{float: "left"}} />
          </NavbarBrand>
          
         
        </Navbar>
      </div>
    );
  }
}

export default HeaderMenu;


