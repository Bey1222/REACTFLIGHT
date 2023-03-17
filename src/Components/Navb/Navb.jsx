import React, { useState } from "react";

//imported react icons ==========>
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { BsMenuDown } from "react-icons/bs";

//Imported images =========>
import logo from "../../assets/logo.png";

const Navb = () => {
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu removeNavBar");
  };

  //Navbar Background Colorfor second =========>
  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 3) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate />
            Support
          </li>
          <li className="flex">
            <BiWorld />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Log In</span>
          <span>Log Out</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listitem">
              Home
            </li>
            <li onClick={removeNavBar} className="listitem">
              Destination
            </li>
            <li onClick={removeNavBar} className="listitem">
              Seats
            </li>
            <li onClick={removeNavBar} className="listitem">
              Discounts
            </li>
            <li onClick={removeNavBar} className="listitem">
              About
            </li>
            <button className="btn flex btnTwo">Contact Us</button>
          </ul>

          <button onClick={removeNavBar} className="btn flex btnOne">
            Contact Us
          </button>
        </div>
        <div onClick={showNavBar} className="toggleIcon">
          <BsMenuDown className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navb;
