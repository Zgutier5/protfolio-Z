import React from 'react';
import "./DescriptionBanner.css";
import blueimg from "../../assets/FB.jpg"
import Responsive from 'react-responsive';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const DescriptionBanner = (props) => {
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
                      <img src={blueimg} width="100%" className="img-responsive center-block" alt="hp" style={{marginTop: "50px"}} />
                        
                      </div>
                      {/* <!-- END - left side --> */}
                      
                      {/* <!-- Right side - AMD ProRender Desc --> */}
                      <Default>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        <h3>Ezequiel Gutierrez</h3>
                        <h4>Software Engineer</h4>
                        </div>
                        <div className="pt-5">
                        Strong Work Ethic, Quick Learner, Resourceful, Leader, and Team player.
Versed in HTML5, Bootstrap, CSS3, JavaScript, JQuery, AJAX, Node.js, Express.js, React.js, React-Native, Mongoose.js, GraphQL, JSON, ES6, MongoDB, WordPress, Postman, GitHub, GIT, GitKraken, AWS-S3, Drupal, PHP, Photoshop pro, Adobe creative suite, Proficient in Google. 
                        </div>
                        <div className="pt-5">
                                    <button type="button" class="btn btn-warning" style={{fontSize: "20px", padding: "15px", marginBottom: "15px", textDecoration: "none"}}>
                                    <a href="/projects" data-lpos="paragraph-link" style={{textDecorationColor: "white"}} >
                                    Projects</a>
                                    </button>
                        </div>
                        
                      </div> 
                      </Default>
                      <Mobile>
                      <div className="col-md-6 text-left" style={{marginTop: "20px", marginBottom: "20px"}} >
                        <div style={{marginTop: "30px"}} >
                        <h3>Ezequiel Gutierrez</h3>
                        <h4>Software Engineer</h4>
                        </div>
                        <div className="pt-5">
                        Strong Work Ethic, Quick Learner, Resourceful, Leader, and Team player.
Versed in HTML5, Bootstrap, CSS3, JavaScript, JQuery, AJAX, Node.js, Express.js, React.js, React-Native, Mongoose.js, GraphQL, JSON, ES6, MongoDB, WordPress, Postman, GitHub, GIT, GitKraken, AWS-S3, Drupal, PHP, Photoshop pro, Adobe creative suite, Proficient in Google. 
                        </div>
                        <div className="pt-5">
                                    <button type="button" class="btn btn-warning" style={{fontSize: "20px", padding: "15px", marginBottom: "15px", textDecoration: "none"}}>
                                    <a href="/projects" data-lpos="paragraph-link" style={{textDecorationColor: "white"}} >
                                    Projects</a>
                                    </button>
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

export default DescriptionBanner;