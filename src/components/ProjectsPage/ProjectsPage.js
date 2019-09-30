import React from 'react';
import "./ProjectsPage.css";

// import BlueIcon from "../BlueIcon/BlueIcon";



import ProjectA from '../Banners/ProjectA';
import ProjectB from '../Banners/ProjectB';
import ProjectC from '../Banners/ProjectC';
import ProjectD from '../Banners/ProjectD';
import ProjectE from '../Banners/ProjectE';
import ProjectF from '../Banners/ProjectF';
import ProjectG from '../Banners/ProjectG';




class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        {/* banner image */}
        
        <ProjectD/>
        <ProjectF/>
        <ProjectG/>
        <ProjectC/>
        <ProjectE/>
        <ProjectB/>
        <ProjectA/>
        
        
        
      </div>
    );
  }
}

export default ProjectsPage;