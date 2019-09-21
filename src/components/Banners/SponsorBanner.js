import React from 'react';
import "./SponsorBanner.css";
import Hpimg from "../../assets/HP_logo.png";
import Dellimg from "../../assets/Dell_logo_2016.svg.png"
import Awsimg from "../../assets/AWS_logo_RGB.png"
import Maxonimg from "../../assets/MAXON_Logo.png"
import Blackmagicimg from "../../assets/Blackmagic-Design-Logo.png"
import AutoDeskimg from "../../assets/color-autodesk.png"
import SideFximg from "../../assets/SideFX_blogo.png"
import Lenovoimg from "../../assets/Lenovo-Partner-Logo.png"
import Blenderimg from "../../assets/blenderlogosocket.png"
import Foundryimg from "../../assets/Foundry_payoff_RGB_black-yellow.png"
import Avidimg from "../../assets/Avid_logo_purple.png"
import Redshiftimg from "../../assets/ redshift-logoHorizontal.png"
import Unityimg from "../../assets/2000px-Unity_Technologies_logo.png"
import Gtechimg from "../../assets/G-Technology_logo_VD_Black.png"
import Vrayimg from "../../assets/Vray-01.png"
import Sonnetimg from "../../assets/sonnet_clr.png"
import ChaosGroupimg from "../../assets/chaosgroup-logo.png"
import Istropiximg from "../../assets/isotropix-logo.png"
import Adobeimg from "../../assets/adobe logo.png"
import Xidaximg from "../../assets/xidax-logo.png"
import Asusimg from "../../assets/ASUS_Logo.png"
import Epicimg from "../../assets/Epic_Games_logo.png"
import Googleimg from "../../assets/new-google.png"
import Appleimg from "../../assets/apple-logo.png"
import AmariImg from "../../assets/armari-logo.png"
import Microsoftimg from "../../assets/microsoft-logo.png"
import Samsungimg from "../../assets/Samsung_Logo.svg.png"
import Hpzimg from "../../assets/HPZ-Logo-Black.png"
import BorisFximg from "../../assets/BorisFX-logo215.png"
import Fxhomeimg from "../../assets/Fxhome-logo.png"
import Sonyimg from "../../assets/sony-logo.png"
import Westernimg from "../../assets/western-digital-2-logo.png"
import RWDimg from "../../assets/rewind.png"
import Filmlightimg from "../../assets/filmlight-logo.png"

const SponsorBanner = (props) => {
  return (
    <div className="why-container">
    
      <div className="section-mask">
        {/* Title */}
        <div className="container">
          
          

          <div className="container-fluid logos-container">
            <div className="container pt-30 pb-30">

                {/* <!-- Top row of 4 (30/30/30/30)--> */}
                <div className="row" style={{marginBottom: "15px"}}>
                    

                    {/* <!--Samsung--> */}
                    <div className="col-md-3" style={{marginTop: "20px"}} >
                      <img src={Samsungimg} width="100%" className="img-responsive center-block" alt="Samsung" />
                    </div>
                    
                     {/* <!--Sony--> */}
                    <div className="col-md-3 " style={{marginLeft: "0px", marginTop: "35px"}} >
                        <img src={Sonyimg} width="100%" className="img-responsive center-block" alt="Sony" />
                    </div>

                    {/* <!--Google--> */}
                    <div className="col-md-3 " style={{marginBottom: "0px", marginTop: "10px"}} >
                        <img src={Googleimg} width="100%" className="img-responsive center-block" alt="Google" />
                    </div>
                      {/* <!--apple--> */}
                    <div className="col-md-3" style={{marginTop: "5px"}}>
                          <img src={Appleimg} width="30%" className="img-responsive center-block" alt="apple" />
                    </div>
                </div>

                {/* <!-- Second row of 2 (60/60)--> */}
                <div className="row" style={{marginBottom: "15px"}}>

                    {/* <!-- Western Digital --> */}
                    <div className="col-md-2 " style={{marginTop: "20px"}}>
                      <img src={Westernimg} width="100%" className="img-responsive center-block" alt="Western Digital" />
                    </div>
                    
                    {/* <!--Rewind--> */}
                    <div className="col-md-2 " style={{marginTop: "20px"}}>
                      <img src={RWDimg} width="100%" className="img-responsive center-block" alt="RWD" />
                    </div>

                    {/* <!--Filmlight--> */}
                    <div className="col-md-2" style={{marginTop: "20px"}} >
                      <img src={Filmlightimg} width="100%" className="img-responsive center-block" alt="Film light" />
                    </div>
                    {/* <!--HP-Z--> */}
                    <div className="col-md-2" style={{marginTop: "10px"}}>
                        <img src={Hpzimg} width="50%" className="img-responsive center-block" alt="HP-Z" />
                    </div>
                    {/* <!-- hp --> */}
                    <div className="col-md-2 " style={{marginTop: "0px"}}>
                      <img src={Hpimg} width="60%" className="img-responsive center-block" alt="hp" />
                    </div>
                    
                    {/* <!--Dell--> */}
                    <div className="col-md-2 " style={{marginTop: "10px"}}>
                      <img src={Dellimg} width="40%" className="img-responsive center-block" alt="Dell" />
                    </div>
                </div>
    
              {/* <!--Third row (6 cols 20/20/20/20/20/20)--> */}

                  <div className="row">
                    {/* <!--AWS--> */}
                    <div className="col-md-2" style={{marginTop: "15px", marginBottom: "15px"}} >
                      <img src={Awsimg} width="65%" className="img-responsive center-block" alt="AWS" />
                    </div>

                    {/* <!--Maxon--> */}
                    <div className="col-md-2" style={{marginTop: "0px",}}>
                      <img src={Maxonimg} width="100%" className="img-responsive center-block" alt= "Maxon" />
                    </div>
                    {/* <!--Blackmagic--> */}
                    <div className="col-md-2" style={{marginTop: "0px", marginBottom: "10px"}} >
                      <img src={Blackmagicimg} width="100%" className="img-responsive center-block" alt="Blackmagic" />
                    </div>
                    {/* <!--AutoDesk--> */}
                    <div className="col-md-2" style={{marginTop: "10px", marginBottom: "10px"}}>
                        <img src={AutoDeskimg} width="100%" className="img-responsive center-block" alt="AutoDesk" />
                    </div>
                    {/* <!--SideFX--> */}
                    <div className="col-md-2" style={{marginTop: "15px", marginBottom: "10px"}}>
                        <img src={SideFximg} width="100%" className="img-responsive center-block" alt="--SideFX--" />
                      </div>
                      {/* <!--Lenovo--> */}
                      <div className="col-md-2" style={{marginTop: "10px", marginBottom: "10px"}}>
                          <img src={Lenovoimg} width="100%" className="img-responsive center-block" alt="Lenovo" />
                      </div>
                  </div>
                  
                  {/* <!--Fourth ROW (6 cols 20/20/20/20/20/20)--> */}

                  <div className="row">
                    {/* <!--Blender--> */}
                    <div className="col-md-2 " style={{marginTop: "25px;"}}>
                      <img src={Blenderimg} width="100%" className="img-responsive center-block" alt="Blender" />
                    </div>
                    {/* <!--Foundry--> */}
                    <div className="col-md-2 " style={{marginTop: "10px", marginBottom: "10px"}}>
                      <img src={Foundryimg} width="100%" className="img-responsive center-block" alt="Foundry"/>
                    </div>
                    {/* <!--AVID--> */}
                    <div className="col-md-2 " style={{marginBottom: "10px", marginTop: "10px"}} >
                      <img src={Avidimg} width="100%" className="img-responsive center-block" alt="AVID" />
                    </div>

                    {/* <!--Redshift--> */}
                    <div className="col-md-2" style={{marginTop: "15px", marginBottom: "10px"}}>
                        <img src={Redshiftimg} width="100%" className="img-responsive center-block" alt="RedShift" />
                    </div>
                      {/* <!--Unity--> */}
                    <div className="col-md-2 " style={{marginTop: "10px", marginBottom: "10px"}}>
                        <img src={Unityimg} width="100%" className="img-responsive center-block" alt="Foundry"/>
                    </div>
                      {/* <!--G-tech--> */}
                    <div className="col-md-2 " style={{marginBottom: "10px", marginTop: "10px"}} >
                        <img src={Gtechimg} width="100%" className="img-responsive center-block" alt="G-tech" />
                    </div>
                  </div>
                  
                  {/* <!--Fifth ROW (6 cols 20/20/20/20/20/20)--> */}

                  <div className="row">
                      {/* <!--Vray--> */}
                      <div className="col-md-2 " style={{marginTop: "0px", marginBottom: "20px"}}>
                        <img src={Vrayimg} width="100%" className="img-responsive center-block" alt="Vray" />
                      </div>

                      {/* <!--Sonnet--> */}
                      <div className="col-md-2 " style={{marginBottom: "20px"}}>
                        <img src={Sonnetimg} width="80%" className="img-responsive center-block" alt="Sonnet"/>
                      </div>

                      {/* <!--ChaosGroup--> */}
                      <div className="col-md-2 " style={{marginTop: "20px", marginBottom: "10px"}} >
                        <img src={ChaosGroupimg} width="100%" className="img-responsive center-block" alt="ChaosGroup" />
                      </div>
                      {/* <!--Istropix--> */}
                      <div className="col-md-2" style={{marginTop: "20px", marginBottom: "0px"}}>
                          <img src={Istropiximg} width="100%" className="img-responsive center-block" alt="Istropix" />
                      </div>
                        {/* <!--Adobe--> */}
                      <div className="col-md-2 " style={{marginTop: "0px", paddingBottom: "10px"}}>
                          <img src={Adobeimg} width="100%" className="img-responsive center-block" alt="Adobe"/>
                      </div>
                        {/* <!--Xidax--> */}
                      <div className="col-md-2 " style={{marginBottom: "20px", marginTop: "10px"}}>
                          <img src={Xidaximg} width="100%" className="img-responsive center-block" alt="Xidax" />
                      </div>
                    </div>
                  
                  {/* <!--Sixth ROW (6 cols 20/20/20/20/20/20)--> */}

                  <div className="row">
                      {/* <!--ASUS--> */}
                      <div className="col-md-2 " style={{marginTop: "20px", marginBottom: "10px"}}>
                        <img src={Asusimg} width="100%" className="img-responsive center-block" alt="Asus" />
                      </div>
                      {/* <!--Epic Games--> */}
                      <div className="col-md-2 " style={{ marginTop: "5px", marginBottom: "10px"}}>
                        <img src={Epicimg} width="40%" className="img-responsive center-block" alt="Epic Games"/>
                      </div>
                      {/* <!--BorisFX--> */}
                      <div className="col-md-2" style={{marginTop: "5px" , marginBottom: "10px"}}>
                        <img src={BorisFximg} width="100%" className="img-responsive center-block" alt="--BorisFX--" />
                      </div>
                      {/* <!--Fxhome--> */}
                      <div className="col-md-2" style={{marginTop: "20px", marginBottom: "10px"}}>
                          <img src={Fxhomeimg} width="100%" className="img-responsive center-block" alt="Fxhome" />
                      </div>
                      
                        {/* <!--amari ltd--> */}
                      <div className="col-md-2 " style={{marginTop: "20px", marginBottom: "10px"}}>
                          <img src={AmariImg} width="100%" className="img-responsive center-block" alt="armari"/>
                      </div>
                        {/* <!--Microsoft--> */}
                      <div className="col-md-2 " style={{marginBottom: "20px", marginTop: "10px", }} >
                          <img src={Microsoftimg} width="100%" className="img-responsive center-block" alt="Microsoft" />
                      </div>
                    </div>
                </div>
              </div> 
              {/* <!-- END - Logos section (black bg) --> */}
          
          
        </div>
      </div>
    </div>
  );
};

export default SponsorBanner;