import React, { Component } from 'react';
import "./Footer.css";
import LogoImg from "../../assets/Z-Letter-PNG-Photo.png";
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class Footer extends Component {
  render() {
    return (
      <footer>
        <Default>
        <div className="container">
          <div className="row">
        
            {/* left side of footer */}
            <div className="col-md-6 column mb-5">
              <div id="text-2" className="widget widget_text">
                <div className="textwidget"   >
                   
                  <img className="alignnone size-medium wp-image-4801" src={LogoImg} alt="whitelogo" width="70%"  />
                   
            
                </div>
              </div>
            </div>
            
            {/* Right side of footer */}
            <div className="col-md-6 column mb-4">
              <div id="pages-2" className="widget widget_pages">
                <h3 className="widget-title footer-title">Ezequiel Gutierrez</h3>
                <ul>
                  <li className="page_item">
                    <a className="page-link" href="/" target="_blank" rel="noopener noreferrer">Home</a>
                    
                  </li>
                  <li className="page_item">
                    <a className="page-link" href="/projects" target="_blank" rel="noopener noreferrer">Projects</a>
                  </li>
                  <li className="page_item">
                    <a className="page-link" href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        </Default>
        <Mobile>
        <div className="container">
          <div className="row">
        
            {/* left side of footer */}
            <div className="col-md-6 column mb-5">
              <div id="text-2" className="widget widget_text">
                <div className="textwidget"   >
                   
                  <img className="alignnone size-medium wp-image-4801" src={LogoImg} alt="whitelogo" width="60%"  />
                   
            
                </div>
              </div>
            </div>
            
            {/* Right side of footer */}
            <div className="col-md-6 column mb-4">
              <div id="pages-2" className="widget widget_pages">
                <h3 className="widget-title footer-title">Ezequiel Gutierrez</h3>
                <ul>
                  <li className="page_item">
                    <a className="page-link" href="/" target="_blank" rel="noopener noreferrer">Home</a>
                    
                  </li>
                  <li className="page_item">
                    <a className="page-link" href="/projects" target="_blank" rel="noopener noreferrer">Projects</a>
                  </li>
                  <li className="page_item">
                    <a className="page-link" href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
                  </li>
          
                  
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        </Mobile>
      </footer>
    );
  }
}

export default Footer;


