import React from 'react';
import './Modeling.css';
import { Switch, NavLink, Route, Redirect, useRouteMatch } from "react-router-dom";
import ModelTriage from "./Models/ModelTriage";

function Modeling () {
  let { path, url } = useRouteMatch();

  return (
    <div className="modeling-container container">
      <div className="modeling-kanban rounded">
        <div className="display-4">COVID-19 Modeling</div>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at commodi dolore iure minus perferendis perspiciatis quae, quaerat repellendus voluptatibus.</p>
      </div>
      <div className="modeling-navbar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink exact className="nav-link" to={`${url}/virusspreadingmodel`}>Virus Spreading Model</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to={`${url}/model2`}>Model 2</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to={`${url}/model3`}>Model 3</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${url}/virusspreadingmodel`} />
        </Route>
        <Route path={`${path}/:modelId`}>
          <ModelTriage />
        </Route>
      </Switch>
    </div>
  );
}

export default Modeling;
