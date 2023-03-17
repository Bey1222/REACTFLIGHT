import React, { useEffect } from "react";

import image from "../../assets/limg.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Lounge = () => {
  //Aos scroll effect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2800"
      className="lounge container section"
    >
      <div className="sectionContainer1 grid">
        <div className="imgDiv">
          <img src={image} className="loungeImg" />
        </div>

        <div className="textDiv">
          <h2>Mini Lounge</h2>
        </div>

        <div className="grids grid">
          <div className="singleGrid">
            <span className="gridTitle">Airport Assistance</span>
            <p>
              call airline from your phone also for ticket pricing and sale!
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">Care During Flight</span>
            <p>
              call airline from your phone also for ticket pricing and sale!
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">Priority Boarding</span>
            <p>
              call airline from your phone also for ticket pricing and sale!
            </p>
          </div>

          <div className="singleGrid">
            <span className="gridTitle">Chauffeur Service</span>
            <p>
              call airline from your phone also for ticket pricing and sale!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
