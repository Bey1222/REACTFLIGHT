import React, { useEffect } from "react";

//Imported image =============>
import Hero from "../../assets/Hero.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  //Aos scroll effect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="home flex container">
      <div className="hText">
        <h1 data-aos="fade-up" data-aos-duration="2800">
          your trips are assured with us
        </h1>
      </div>
    </div>
  );
};

export default Home;
