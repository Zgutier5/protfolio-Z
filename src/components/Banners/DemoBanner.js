import React from 'react';
import "./DemoBanner.css";
import DemoImg from "../../assets/landingpage_demolist_V1_2.png"
// I use this to auto-shrink the text for smaller screens
import FitText from "react-fittext";

const DemoBanner = (props) => {
  return (
    <div className="justice" style={{marginTop: "0px"}}  >
      <div className="container">
        {/* this will shrink the text on smaller screens */}
        <FitText compressor={2.7} minFontSize={25}>
          <h3 className="justice-banner">Featured Demonstrations – Hall 7, B.46</h3>
        </FitText>

        
      </div>
      <div>
     
         <img className="alignnone size-medium wp-image-4801" src={DemoImg} alt="Demo" width="100%"  />

      </div>
    </div>
  );
};

export default DemoBanner;
