import React, { useEffect } from "react";

//imported icons ========>
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";

import Aos from "aos";
import "aos/dist/aos.css";

const Info = () => {
  //Aos scroll effect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2800" className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>make memories all around the world</h2>
          <button className="btn">View Now</button>
        </div>

        <div className="cardsDiv grid">
          <div className="sCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icons" />
            </div>
            <span className="cardTitle">Book & relax</span>
            <p>call airline and book a flight ticket!</p>
          </div>

          <div className="sCard grid">
            <div className="iconDiv flex">
              <BsBookmarkCheck className="icons" />
            </div>
            <span className="cardTitle">smart checklist</span>
            <p>call airline and book a flight ticket!</p>
          </div>

          <div className="sCard grid">
            <div className="iconDiv flex">
              <BsShieldCheck className="icons" />
            </div>
            <span className="cardTitle">Save More</span>
            <p>call airline and book a flight ticket!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
