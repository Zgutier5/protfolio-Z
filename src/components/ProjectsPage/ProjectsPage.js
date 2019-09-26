import React from 'react';
import "./ProjectsPage.css";

// import BlueIcon from "../BlueIcon/BlueIcon";

import Responsive from 'react-responsive';

import ProjectA from '../Banners/ProjectA';
import ProjectB from '../Banners/ProjectB';
import ProjectC from '../Banners/ProjectC';
import ProjectD from '../Banners/ProjectD';


const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        {/* banner image */}
        <ProjectD/>
        <ProjectC/>
        <ProjectB/>
        <ProjectA/>
        
        
        
      </div>
    );
  }
}

export default ProjectsPage;