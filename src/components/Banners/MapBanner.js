import React from 'react';
import "./MapBanner.css";
import Responsive from 'react-responsive';
// I use this to auto-shrink the text for smaller screens
import FitText from "react-fittext";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const MapBanner = (props) => {
  return (
    <div className="justice" style={{paddingBottom: "20px"}}  >
      <Default>
      <div className="container">
        {/* this will shrink the text on smaller screens */}
        <FitText compressor={2.7} minFontSize={25}>
          <h3 className="justice-banner">Location of Amsterdam Rai Convention Center</h3>
        </FitText>

        
      </div>
      <div>
     
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.6117004006455!2d4.886427051283978!3d52.34119005711852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a1f63d57e25%3A0xa08f37a724d09338!2sAmsterdam%20RAI!5e0!3m2!1sen!2sus!4v1568214156571!5m2!1sen!2sus" width="80%" height="500" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
      
      </div>
      </Default>
      <Mobile>
      <div className="container">
        {/* this will shrink the text on smaller screens */}
        <FitText compressor={2.7} minFontSize={25}>
          <h3 className="justice-banner">Location of Amsterdam Rai Convention Center</h3>
        </FitText>

        
      </div>
      <div>
     
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2437.6117004006455!2d4.886427051283978!3d52.34119005711852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c60a1f63d57e25%3A0xa08f37a724d09338!2sAmsterdam%20RAI!5e0!3m2!1sen!2sus!4v1568214156571!5m2!1sen!2sus" width="80%" height="400" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
      
      </div>
      </Mobile>
    </div>
  );
};

export default MapBanner;
