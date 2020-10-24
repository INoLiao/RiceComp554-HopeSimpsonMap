import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Map from "../Map/Map";
import MapGDS from "../Map/MapGDS";
import Modeling from "../Modeling/Modeling";

function SiteRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/modeling">
          <Modeling />
        </Route>
        <Route exact path="/map/gds">
          <MapGDS />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default SiteRouter;
