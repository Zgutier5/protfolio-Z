import React from 'react';
import "./ProjectB.css";
import ProjectBimg from "../../assets/JS Cheats.jpg"
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const ProjectB = (props) => {
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
                      <img src={ProjectBimg} width="100%" className="img-responsive center-block" alt="hp" style={{marginTop: "50px"}} />
                        
                      </div>
                      {/* <!-- END - left side --> */}
                      
                      {/* <!-- Right side - AMD ProRender Desc --> */}
                      <Default>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        
                        <h3>Javascript Dictionary</h3>
                        </div>
                        <div className="pt-5">
                        Js-cheats is a where beginner coders learning javascript can look up built in methods.
The site consist String methods, Number methods, and Array methods. 
Site also has authentication with and blog post for questions. 
Back end database with mongoDB. Feel free to visit <a href="https://js-cheats.now.sh" target="_blank">js-cheats</a>.                     </div>
                        
                        
                      </div> 
                      </Default>
                      <Mobile>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        <h3>Javascript Dictionary</h3>
                        </div>
                        <div className="pt-5">
                        Js-cheats is a where beginner coders learning javascript can look up built in methods.
The site consist String methods, Number methods, and Array methods. 
Site also has authentication with and blog post for questions. 
Back end database with mongoDB. Feel free to visit <a href="https://js-cheats.now.sh" target="_blank">js-cheats</a>. 
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

export default ProjectB;