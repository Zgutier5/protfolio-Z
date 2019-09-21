import React, { Component } from "react";


class TitleBanner extends Component {
  render() {
    // check what banner style to use
    let containerStyle = {
      backgroundColor: `${this.props.color}`,
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover;",
      backgroundAttachment: "scroll",
      width: "100%"
    };

    let textStyle = {
      color: "#ffffff",
      fontSize: "48px",
      lineHeight: "300px",
      fontWeight: "500",
      width: "100%"
    };

    

    return (
      <div className="title">
        <div
          className="page-section content-full shadow-inside-top-bottom"
          style={containerStyle}
        >
          <div className="section-content">
            <div>
              <h2 className="md-heading textaligncenter" style={textStyle}>
                {this.props.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleBanner;
