import React, { useEffect } from "react";

//imported Icon =============>
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

import Aos from "aos";
import "aos/dist/aos.css";

const Search = () => {
  //Aos scroll effect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      className="search container section"
    >
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div className="searchIs flex">
          <div className="singleI flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Destination</h4>
              <input type="text" placeholder="Your Destination" />
            </div>
          </div>

          <div className="singleI flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Passengers</h4>
              <input type="text" placeholder="Number" />
            </div>
          </div>

          <div className="singleI flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Departure</h4>
              <input type="text" placeholder="Add Date" />
            </div>
          </div>

          <div className="singleI flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Arrival</h4>
              <input type="text" placeholder="Add Date" />
            </div>
          </div>

          <button className="btn btnBlock flex">Search Flight</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
