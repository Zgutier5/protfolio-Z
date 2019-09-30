import React from 'react';
import "./ProjectE.css";
import ProjectDimg from "../../assets/Siggraph.jpg"
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const ProjectE = (props) => {
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
                        
                        <h3>AMD Siggraph Site</h3>
                        </div>
                        <div className="pt-5">
                        I was contracted to build this custom promotional website. Built with custom css and HTML for their drupal system and submited code design directly to AMD in house engineering team.
          Site shows everything from Contact information, Services offered, Social media links.  
                        </div>
                        
                        
                      </div> 
                      </Default>
                      <Mobile>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        <h3>AMD Siggraph Site</h3>
                        </div>
                        <div className="pt-5">
                        I was contracted to build this custom promotional website. Built with custom css and HTML for their drupal system and submited code design directly to AMD in house engineering team.
          Site shows everything from Contact information, Services offered, Social media links.      
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

export default ProjectE;