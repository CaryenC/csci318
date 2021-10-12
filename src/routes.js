import React from "react";
import Insights from "./pages/Insights";
import InfoOne from "./pages/InfoOne";
import InfoTwo from "./pages/InfoTwo";
import InfoThree from "./pages/InfoThree";
import InfoFour from "./pages/InfoFour";
import About from "./pages/About/About";
import TopBar from "./components/Navbar/TopBar.js";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function routes() {
  return (
    <div>
    <Router>
    <TopBar />
    <nav>
    <Switch>
    <Route exact path="/insights" component={Insights}></Route>
    <Route exact path="/info-one" component={InfoOne}></Route>
    <Route exact path="/info-two" component={InfoTwo}></Route>
    <Route exact path="/info-three" component={InfoThree}></Route>
    <Route exact path="/info-four" component={InfoFour}></Route>
    <Route exact path="/about" component={About}></Route>
    <Route path="*">
    <NotFound />
    </Route>
    </Switch>
    </nav>
    </Router>
    </div>
  );
}

export default routes;
