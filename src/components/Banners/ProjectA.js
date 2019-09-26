import React from 'react';
import "./ProjectA.css";
import ProjectAimg from "../../assets/Michaela D. Cuellar.jpg"
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const ProjectA = (props) => {
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
                      <img src={ProjectAimg} width="100%" className="img-responsive center-block" alt="hp" style={{marginTop: "50px"}} />
                        
                      </div>
                      {/* <!-- END - left side --> */}
                      
                      {/* <!-- Right side - AMD ProRender Desc --> */}
                      <Default>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        
                        <h3>Law Office Full build</h3>
                        </div>
                        <div className="pt-5">
                        Custom law firm website. Built with react, bootstrap, react-strap, custom css, react-router.
Site shows everything from Contact information, Services offered, Attorney profile, Social media links, and google maps location. I also manage and host the site <a href="https://www.michaelacuellar.com" target="_blank">michaelacuellar.com</a>.
                       </div>
                        
                        
                      </div> 
                      </Default>
                      <Mobile>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        <h3>Law Office Full build</h3>
                        </div>
                        <div className="pt-5">
                        Custom law firm website. Built with react, bootstrap, react-strap, custom css, react-router.
Site shows everything from Contact information, Services offered, Attorney profile, Social media links, and google maps location. I also manage and host the site <a href="https://www.michaelacuellar.com" target="_blank">michaelacuellar.com</a>. 
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

export default ProjectA;