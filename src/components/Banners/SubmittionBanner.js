import React from 'react';
import "./SubmittionBanner.css";
import Responsive from 'react-responsive';

// I use this to auto-shrink the text for smaller screens

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const SubmittionBanner = (props) => {
  return (
    <div className="justice">
      <div className="container" style={{marginBottom: "0px"}} >
        
        <div className="container-fluid no-fluid-gutters title-row">
          <Default>
            <div className="row no-fluid-gutters" style={{paddingTop: "25px", paddingBottom: "15px"}} >
                <h3></h3>
                      
                    <div className="container pt-20" style={{fontSize: "25px"}} >

                          <p className="text-left">
                          AMD leading technologies are the key to accelerate professional creative workflows propelling the industry of
                          today. Powerful AMD Ryzen™ Pro, Ryzen™ Threadripper™, and EPYC™ Processors and Radeon™
                          Professional graphics cards remove many bottlenecks in high resolution media workflows, including
                          encoding/decoding, effects processing, and playback Virtual Production demonstrations.
                          </p>
                            
                          
                    </div>

                  <h3></h3>
                    <div className="container pt-20">
                          

                          <p className="text-left" style={{fontSize: "25px"}} >
                          From Ryzen™ Threadripper™ CPUs to EPYC™ processors, and Radeon™ Pro graphics to Radeon™
                          Adrenaline Software™, AMD has a content creation solution for today’s content creators.
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
                          AMD leading technologies are the key to accelerate professional creative workflows propelling the industry of
                          today. Powerful AMD Ryzen™ Pro, Ryzen™ Threadripper™, and EPYC™ Processors and Radeon™
                          Professional graphics cards remove many bottlenecks in high resolution media workflows, including
                          encoding/decoding, effects processing, and playback Virtual Production demonstrations.
                          </p>
                            
                          
                    </div>

                  <h3></h3>
                    <div className="container pt-20">
                          

                          <p className="text-left" style={{fontSize: "16px"}} >
                          From Ryzen™ Threadripper™ CPUs to EPYC™ processors, and Radeon™ Pro graphics to Radeon™
                          Adrenaline Software™, AMD has a content creation solution for today’s content creators.
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

export default SubmittionBanner;
