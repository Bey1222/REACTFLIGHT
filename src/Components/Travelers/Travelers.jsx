import React, { useEffect } from "react";

import image from "../../assets/japan.jpg";
import image2 from "../../assets/Newyork.jpg";
import image3 from "../../assets/moscow.jpg";
import image4 from "../../assets/italy.jpg";

import user from "../../assets/user1.png";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Travelers = () => {
  //Aos scroll effect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2800"
      className="travelers container section"
    >
      <div className="sectionContainer2">
        <h2>top clients!</h2>
        <p>march 2023</p>

        <div className="travelersContainer grid">
          <div className="singleTraveler">
            <img src={image} className="travelersI" />
            <div className="travelersDetails">
              <div className="travelerpic">
                <img src={user} className="userI" />
              </div>

              <div className="tName">
                <p>@jasmine2133</p>
                <p>Tokyo</p>
              </div>
            </div>
          </div>

          <div className="singleTraveler">
            <img src={image2} className="travelersI" />
            <div className="travelersDetails">
              <div className="travelerpic">
                <img src={user2} className="userI" />
              </div>

              <div className="tName">
                <p>@Lukeforever</p>
                <p>New York</p>
              </div>
            </div>
          </div>

          <div className="singleTraveler">
            <img src={image3} className="travelersI" />
            <div className="travelersDetails">
              <div className="travelerpic">
                <img src={user3} className="userI" />
              </div>

              <div className="tName">
                <p>@Phillymom</p>
                <p>Moscow</p>
              </div>
            </div>
          </div>

          <div className="singleTraveler">
            <img src={image4} className="travelersI" />
            <div className="travelersDetails">
              <div className="travelerpic">
                <img src={user4} className="userI" />
              </div>

              <div className="tName">
                <p>@Zvsh</p>
                <p>Florence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
