import React, { Component } from 'react';
import "./HeaderMenu.css";
import LogoImg from "../../assets/Z-Letter-PNG-Photo.png";
import { NavLink as Link } from "react-router-dom";
import Responsive from 'react-responsive';

import {
  Collapse,
  Navbar,
  NavbarBrand
} from 'reactstrap';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

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
          <Default>
          <NavbarBrand tag={Link} to="/">
            <img src={LogoImg} alt="Ryzen logo" width="10%" style={{float: "left"}} />
          </NavbarBrand>
          </Default>
          <Mobile>
          <NavbarBrand tag={Link} to="/">
            <img src={LogoImg} alt="Ryzen logo" width="30%" style={{float: "center"}} />
          </NavbarBrand>
          </Mobile>
          {/* this is the part of the header the collapses on mobile */}
          <Default>
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
                    <div className="header-link-text" style={{marginLeft: "15px"}} >Projects</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                
  
                {/* Contact link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/contact">
                    <div className="header-link-text" style={{marginLeft: "15px"}} >Contact Us</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
                
              </div>
            </div>
          </Collapse>
          </Default>
          <Mobile>
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="ml-auto">
              <div className="header-container"  >
                {/* Home link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/">
                    <div className="header-link-text" style={{marginLeft: "30px"}} >Home</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
    
                

                {/* Attorney Profile link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/jailrelease">
                    <div className="header-link-text" style={{marginLeft: "38px"}} >Projects</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
  
                
  
                {/* Contact link */}
                <div className="header-link-container">
                  <Link className="menu-link" exact to="/contact">
                    <div className="header-link-text" style={{marginLeft: "32px"}} >Contact Us</div>
                  </Link>
                  <div className="header-link-underline">{' '}</div>
                </div>
                
              </div>
            </div>
          </Collapse>
          </Mobile>
         
        </Navbar>
      </div>
    );
  }
}

export default HeaderMenu;


