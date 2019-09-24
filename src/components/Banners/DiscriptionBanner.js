import React from 'react';
import "./DiscriptionBanner.css";
import Responsive from 'react-responsive';
// I use this to auto-shrink the text for smaller screens

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const DiscriptionBanner = (props) => {
  return (
    <div className="justice">
      <div className="container" style={{marginBottom: "0px"}} >
        
        <div className="container-fluid no-fluid-gutters title-row">
          <Default>
            <div className="row no-fluid-gutters" style={{paddingTop: "25px", paddingBottom: "15px"}} >
                
                      
                    <div className="container pt-20" style={{fontSize: "25px"}} >

                          <p className="text-left">
                          Unveiling AMD’s first high-quality, device independent wireless PC-to-VR streaming. Radeon™ ReLive for VR is a new feature of our Pro Software driver that allows compatible headsets to receive a wireless stream of data from a host workstation with full-powered Radeon Pro GPU doing the lift.
                          </p>
                            
                          
                    </div>

                  
                    <div className="container pt-20">
                          

                          <p className="text-left" style={{fontSize: "25px"}} >
                          AMD’s Radeon™ ReLive for VR allows for a wireless VR solution that not only eliminates the physical cable from the head mounted display (HMD) to the host computer, but also removes any requirements for additional cables, tripods or power requirements typically associated with ‘lighthouse’ tracking components of other VR solutions. For more information about Radeon™ ReLive for VR, visit <a href="https://www.amd.com/en/technologies/radeon-pro-software-relive">here.</a>
                          </p>

                          

                    </div>

            </div>
                       {/* <!-- END - container --> */}
                      
          </Default>   
          <Mobile>
            <div className="row no-fluid-gutters" style={{paddingTop: "25px", paddingBottom: "15px"}} >
                
                      
                    <div className="container pt-20" style={{fontSize: "16px"}} >

                          <p className="text-left">
                          Unveiling AMD’s first high-quality, device independent wireless PC-to-VR streaming. Radeon™ ReLive for VR is a new feature of our Pro Software driver that allows compatible headsets to receive a wireless stream of data from a host workstation with full-powered Radeon Pro GPU doing the lift.
                          </p>
                            
                          
                    </div>

                  
                    <div className="container pt-20">
                          

                          <p className="text-left" style={{fontSize: "16px"}} >
                          AMD’s Radeon™ ReLive for VR allows for a wireless VR solution that not only eliminates the physical cable from the head mounted display (HMD) to the host computer, but also removes any requirements for additional cables, tripods or power requirements typically associated with ‘lighthouse’ tracking components of other VR solutions. For more information about Radeon™ ReLive for VR, visit <a href="https://www.amd.com/en/technologies/radeon-pro-software-relive">here.</a>
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

export default DiscriptionBanner;
