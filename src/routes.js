import React from "react";
import Insights from "./pages/Insights";
import InfoOne from "./pages/InfoOne";
import InfoTwo from "./pages/InfoTwo";
import InfoThree from "./pages/InfoThree";
import InfoFour from "./pages/InfoFour";
import About from "./pages/About/About";
import TopBar from "./components/Navbar/TopBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function routes() {
  return (
    <div>
      <Router>
        <TopBar />
        <Route path="/insights" component={Insights}></Route>
        <Route path="/info-one" component={InfoOne}></Route>
        <Route path="/info-two" component={InfoTwo}></Route>
        <Route path="/info-three" component={InfoThree}></Route>
        <Route path="/info-four" component={InfoFour}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    </div>
  );
}

export default routes;
