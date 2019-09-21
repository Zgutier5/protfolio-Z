import React, { Component } from 'react';
import "./HeaderSocial.css";



class HeaderSocial extends Component {
  render() {
    return (
      <div className="TopHeader">
        <header className="width-full height-60 attachment-scroll border-4 scroll-resize scroll-transparent">
      
          <div className="header-top">
            <div className="header-slogan mr-auto ml-3">{this.props.leftText}</div>
            <div className="float-right">
              <div className="header-social social-links">
            
                <a className="linkedin" href="https://www.linkedin.com/in/ezequiel-gutierrez-942865161/" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a className="email" href="mailto:design.guiterrez44@gmail.com" title="email" target="_self"><i className="far fa-envelope"></i></a>
          
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderSocial;

