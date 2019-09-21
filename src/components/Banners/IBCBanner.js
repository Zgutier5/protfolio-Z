import React from 'react';
import "./IBCBanner.css";
import Responsive from 'react-responsive';
// I use this to auto-shrink the text for smaller screens

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const IBCBanner = (props) => {
  return (
    <div className="justice">
      <div className="container" style={{marginBottom: "0px"}} >
        
        <div className="container-fluid no-fluid-gutters title-row">
          <Default>
            <div className="row no-fluid-gutters" style={{paddingTop: "25px", paddingBottom: "15px"}} >
                <h3></h3>
                      
                    <div className="container pt-20" style={{fontSize: "25px"}} >

                          <p className="text-left">
                          At IBC 2019, discover how AMD and market-leading partners bring impossible ideas to reality for broadcast and creative professionals while delivering exciting results in a snap. AMD executive experts will be available to discuss innovative demonstrations featuring leading broadcast and creative industry partners including Adobe®, Avid®, Blackmagic Design, Dell™, Maxon, and more. 
                          </p>
                            
                          
                    </div>

                  <h3></h3>
                    <div className="container pt-20">
                          

                          <p className="text-left" style={{fontSize: "25px"}} >
                          </p>

                          

                    </div>

            </div>
                       {/* <!-- END - container --> */}
                      
           </Default> 
           <Mobile>
            <div className="row no-fluid-gutters" style={{paddingTop: "25px", paddingBottom: "15px"}} >
                <h3></h3>
                      
                    <div className="container pt-20" style={{fontSize: "16px"}} >

                          <p className="text-left">
                          At IBC 2019, discover how AMD and market-leading partners bring impossible ideas to reality for broadcast and creative professionals while delivering exciting results in a snap. AMD executive experts will be available to discuss innovative demonstrations featuring leading broadcast and creative industry partners including Adobe®, Avid®, Blackmagic Design, Dell™, Maxon, and more. 
                          </p>
                            
                          
                    </div>

                  <h3></h3>
                    <div className="container pt-20">
                          

                          <p className="text-left" style={{fontSize: "16px"}} >
                          </p>

                          

                    </div>

            </div>
                       {/* <!-- END - container --> */}
                      
           </Mobile>        
         </div>
      </div>
    </div>
  );
};

export default IBCBanner;
