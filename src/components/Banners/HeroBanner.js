import React from 'react';
import "./HeroBanner.css";
import HeroImg from "../../assets/herobanner2.png";


// Hero banner

const HeroBanner = (props) => {
  return (
    <div>
  
      <div>
     
         <img className="alignnone size-medium wp-image-4801" src={HeroImg} alt="whitelogo" width="100%"  />

      </div>
    </div>
  );
};

export default HeroBanner;