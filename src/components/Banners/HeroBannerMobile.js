import React from 'react';
import "./HeroBannerMobile.css";
import HeroImg from "../../assets/herobanner2.png";


// hero banner mobile

const HeroBannerMobile = (props) => {
  return (
    <div className="mobile-homepage-banner">
      <div>
        <img className="alignnone size-medium wp-image-4801" src={HeroImg} alt="whitelogo" width="100%" />

      </div>


    
    </div>
  );
};

export default HeroBannerMobile;