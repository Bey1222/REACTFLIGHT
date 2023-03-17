import React from "react";
import Home from "./Components/Home/Home";
import Navb from "./Components/Navb/Navb";
import Search from "./Components/Search/Search";
import Info from "./Components/Info/Info";
import Support from "./Components/Support/Support";
import Lounge from "./Components/Lounge/Lounge";
import Subscribers from "./Components/Subscribers/Subscribers";
import Travelers from "./Components/Travelers/Travelers";
import Footer from "./Components/Footer/Foot";
const App = () => {
  return (
    <div>
      <Navb />
      <Home />
      <Search />
      <Info />
      <Lounge />
      <Travelers />
      {/*<Support />*/}
      <Subscribers />
      <Footer />
    </div>
  );
};

export default App;
