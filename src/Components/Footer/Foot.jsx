import React, { useEffect } from "react";

import footer from "../../assets/logo.png";

import { TiSocialFacebook } from "react-icons/ti";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";

const Foot = () => {
  //Aos scroll effect
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2800" className="footer">
      <div className="sectionContainer3 container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={footer} className="logof" />
          </div>
          <p>your adventure awaits, fly!</p>
          <div className="sIcon flex">
            <TiSocialFacebook className="logof" />
            <AiOutlineTwitter className="logof" />
            <AiFillYoutube className="logof" />
            <FaPinterestP className="logof" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="lTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-in</a>
          </li>
          <li>
            <a href="">Manage Booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="lTitle">Quick Guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How To</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="lTitle">Information</span>
          <li>
            <a href="#footer.jsx">Chauffuer</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Route Map</a>
          </li>
          <li>
            <a href="">Programme Rules</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          &copy; 2023, All Rights Reserved{" "}
          <a href="mailto:abbeyola97@gmail.com" target="_blank">
            Abbey
          </a>
        </p>
      </div>
    </div>
  );
};

export default Foot;
