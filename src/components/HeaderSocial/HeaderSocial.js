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
            
                <a className="facebook" href="https://www.facebook.com/AMD/" title="facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a className="linkedin" href="https://www.linkedin.com/company/amd/" title="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a className="twitter" href="https://twitter.com/AMD" title="twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a className="youtube" href="https://www.youtube.com/user/amd" title="youtube" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderSocial;

