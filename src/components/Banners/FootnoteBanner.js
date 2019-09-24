import React from 'react';
import "./FootnoteBanner.css";
// I use this to auto-shrink the text for smaller screens


const FootnoteBanner = (props) => {
  return (
    <div className="justice">
      <div className="container" style={{marginBottom: "0px"}} >
        
        <div className="container-fluid no-fluid-gutters title-row">
            <div className="row no-fluid-gutters" style={{paddingTop: "25px", paddingBottom: "15px"}} >
                
                      
                    <div className="container pt-20" style={{fontSize: "10px"}} >

                          <p className="text-left">
                          Radeon™ ReLive for VR for workstation wireless VR requires HTC VIVE Focus™ Plus headset. For VR connectivity, an 802.11ac router or access point is required. Compatible with AMD Radeon™ VR Ready Creator products (learn more at https://www.amd.com/en/technologies/vr-ready-creator). Supports: Windows® 10. RPS-108
                          </p>
                            
                          
                    </div>

                  
                    <div className="container pt-20">
                          

                          <p className="text-left" style={{fontSize: "25px"}} >
                          </p>

                          

                    </div>

            </div>
                       {/* <!-- END - container --> */}
                      
                    
         </div>
      </div>
    </div>
  );
};

export default FootnoteBanner;
