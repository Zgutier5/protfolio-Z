import React, { Component } from 'react';
import "./HeaderMenu.css";
import LogoImg from "../../assets/Z-Letter-PNG-Photo.png";
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
            <img src={LogoImg} alt="Ryzen logo" width="10%" style={{float: "left"}} />
          </NavbarBrand>
          {/* this is the part of the header the collapses on mobile */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="ml-auto">
              <div className="header-container">
                {/* Home link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/">
                    <div className="header-link-text" style={{marginLeft: "15px,"}} >Home</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
    
                

                {/* Attorney Profile link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/jailrelease">
                    <div className="header-link-text">Projects</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                
  
                {/* Contact link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/contact">
                    <div className="header-link-text">Contact Us</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
                
              </div>
            </div>
          </Collapse>
          
         
        </Navbar>
      </div>
    );
  }
}

export default HeaderMenu;


