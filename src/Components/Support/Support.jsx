import React from "react";

//Imported image =============>
import image from "../../assets/support.jpg";

const Support = () => {
  return (
    <div className="support container section">
      <div className="supportContainer1">
        <div className="titleDiv">
          <small>Travel Support</small>
          <h2>move around the globe with confidence</h2>
          <p>allow us help with your travel and booking plans today!</p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="sInfo">
              <span className="number">1</span>
              <h4>New York Travel Requirements</h4>
              <p>allow us help with your travel and booking plans today!</p>
            </div>

            <div className="sInfo">
              <span className="number">2</span>
              <h4>Chauffeuer Services at arrival</h4>
              <p>allow us help with your travel and booking plans today!</p>
            </div>

            <div className="sInfo">
              <span className="number">3</span>
              <h4>Multi-risk Travel Insurance</h4>
              <p>allow us help with your travel and booking plans today!</p>
            </div>
          </div>

          <div className="imgDiv">
            <img src={image} className="support" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
