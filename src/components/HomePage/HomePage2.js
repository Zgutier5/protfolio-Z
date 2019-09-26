import React from 'react';
import "./HomePage.css";

// import BlueIcon from "../BlueIcon/BlueIcon";

import Responsive from 'react-responsive';
import DescriptionBanner from '../Banners/DescriptionBanner';


const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class HomePage2 extends React.Component {
  render() {
    return (
      <div>
        {/* banner image */}
        
        <DescriptionBanner/>
        
        
        
      </div>
    );
  }
}

export default HomePage2;