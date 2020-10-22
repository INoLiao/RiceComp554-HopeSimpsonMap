import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Map from "../Map/Map";
import Modeling from "../Modeling/Modeling";

function SiteRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/modeling">
          <Modeling />
        </Route>
        <Route path="/map">
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
