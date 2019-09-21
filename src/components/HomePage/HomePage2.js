import React from 'react';
import "./HomePage.css";
// import FitText from "react-fittext";

import HeroBanner from "../Banners/HeroBanner";
import DemoBanner from "../Banners/DemoBanner";
// import BlueIcon from "../BlueIcon/BlueIcon";

import SponsorBanner from "../Banners/SponsorBanner";

import Responsive from 'react-responsive';
import HeroBannerMobile from "../Banners/HeroBannerMobile";
import SubmittionBanner from '../Banners/SubmittionBanner';
import PlaneBanner from '../Banners/PlaneBanner';
import DiscriptionBanner from '../Banners/DiscriptionBanner';
import IBCBanner from '../Banners/IBCBanner';
import FootnoteBanner from '../Banners/FootnoteBanner';
import MapBanner from '../Banners/MapBanner';

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class HomePage2 extends React.Component {
  render() {
    return (
      <div>
        {/* banner image */}
        <Default>
          <HeroBanner />
        </Default>
        <Mobile>
          <HeroBannerMobile />
        </Mobile>
        <SubmittionBanner/>
        <DemoBanner />
        <IBCBanner/>
        <PlaneBanner/>
        <DiscriptionBanner/>
        <MapBanner/>
        <SponsorBanner />
        <FootnoteBanner/>
       
      </div>
    );
  }
}

export default HomePage2;