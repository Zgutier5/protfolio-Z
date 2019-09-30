import React from 'react';
import "./ProjectG.css";
import ProjectDimg from "../../assets/CGbanner.jpg"
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const ProjectG = (props) => {
  return (
    <div className="why-container">
    
      <div className="section-mask">
        {/* Title */}

                {/* <!--
                    About AMD ProRender + Venue img row
                  --> */}
                  <div className="container pt-40">
                    <div className="row">
                      {/* <!-- Left side - Venue image + img credits --> */}
                      <div className="col-md-6 text-center" style={{marginBottom: "20px"}} >
                      <img src={ProjectDimg} width="100%" className="img-responsive center-block" alt="hp" style={{marginTop: "50px"}} />
                        
                      </div>
                      {/* <!-- END - left side --> */}
                      
                      {/* <!-- Right side - AMD ProRender Desc --> */}
                      <Default>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        
                        <h3>AMD CGarchitect Banner</h3>
                        </div>
                        <div className="pt-5">
                                  I was contracted to build this custom banner. Built with custom css and HTML for their drupal system.
          Site shows everything from Contact information, Services offered, Social media links. Page can be found here <a href="https://www.amd.com/en/graphics/workstation-architecture-engineering-construction-solutions">cgarchitect</a>.    
                        </div>
                        
                        
                      </div> 
                      </Default>
                      <Mobile>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        <h3>AMD CGarchitect Banner</h3>
                        </div>
                        <div className="pt-5">
                        I was contracted to build this custom banner. Built with custom css and HTML for their drupal system.
          Site shows everything from Contact information, Services offered, Social media links. Banner can be found here <a href="https://www.amd.com/en/graphics/workstation-architecture-engineering-construction-solutions">cgarchitect</a>.      
                            </div>
                       
                        
                      </div> 
                      </Mobile>
                      {/* <!-- END - right side --> */}

                    </div>
                  </div> 
                  {/* <!-- END - About AMD ProRender + Venue img row  --> */}
                
      </div>
    </div>
    
  );
};

export default ProjectG;