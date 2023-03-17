import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Subscribers = () => {
  //Aos scroll effect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2800"
      className="subscribers section"
    >
      <div className="sectionContainer2 container">
        <h2>Subscribe to our newsletter for latest news & discounts</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Email Address" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
