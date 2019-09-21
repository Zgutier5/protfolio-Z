import React, { Component } from 'react';
import "./Footer.css";
import LogoImg from "../../assets/white-amd-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
        
            {/* left side of footer */}
            <div className="col-md-6 column mb-5">
              <div id="text-2" className="widget widget_text">
                <div className="textwidget" style={{paddingTop: "15%"}}  >
                   
                  <img className="alignnone size-medium wp-image-4801" src={LogoImg} alt="whitelogo" width="100%" height="100%" />
                   
            
                </div>
              </div>
            </div>
            
            {/* Right side of footer */}
            <div className="col-md-6 column mb-4">
              <div id="pages-2" className="widget widget_pages">
                <h3 className="widget-title footer-title">Privacy Policy</h3>
                <ul>
                  <li className="page_item">
                    <a className="page-link" href="https://www.amd.com/en/corporate/copyright" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                    
                  </li>
                  <li className="page_item">
                    <a className="page-link" href="https://www.amd.com/en/corporate/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>
                  </li>
                  <li className="page_item">
                    <a className="page-link" href="https://www.amd.com/en/corporate/cookies" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
                  </li>
                  <li className="page_item current_page_item">
                    <a className="page-link" href="https://www.amd.com/en/corporate/trademarks" target="_blank" rel="noopener noreferrer">Trademarks</a>
                  </li>
                  <li className="page_item">
                     <a className="page-link" href="https://www.amd.com/system/files/documents/statement-human-trafficking-forced-labor.pdf" target="_blank" rel="noopener noreferrer">Statement on Forced Labor</a>
                  </li>
                  <li className="page_item">
                     <a className="page-link" href="https://www.amd.com/en/corporate/competition" target="_blank" rel="noopener noreferrer">Fair and Open Competition</a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

