import React from 'react';
import "./PlaneBanner.css";
import PlaneImg from "../../assets/planebanner.jpg"
// I use this to auto-shrink the text for smaller screens
import FitText from "react-fittext";

const PlaneBanner = (props) => {
  return (
    <div className="justice" style={{marginTop: "0px"}}  >
      <div className="container">
        {/* this will shrink the text on smaller screens */}
        <FitText compressor={2.7} minFontSize={25}>
          <h3 className="justice-banner">AMD takes Wireless VR to the Next Level - IBC Future Zone Hall 8. F19</h3>
        </FitText>

        
      </div>
      <div>
     
         <img className="alignnone size-medium wp-image-4801" src={PlaneImg} alt="Demo" width="100%"  />

      </div>
    </div>
  );
};

export default PlaneBanner;
