import React from 'react';
import './Modeling.css';
import { Switch, NavLink, Route, Redirect, useRouteMatch } from "react-router-dom";
import ModelTriage from "./Models/ModelTriage";

function Modeling () {
    let { path, url } = useRouteMatch();

    return (
	<div className="modeling-container container">
	    <div className="modeling-navbar">
		<ul className="nav nav-tabs">
		    <li className="nav-item">
			<NavLink exact className="nav-link" to={`${url}/fourier-basedanalysis`}>Fourier-Based Analysis</NavLink>
		    </li>
		    <li className="nav-item">
			<NavLink exact className="nav-link" to={`${url}/virusspreadingmodel`}>Virus Spreading Model</NavLink>
		    </li>
		    <li className="nav-item">
			<NavLink exact className="nav-link" to={`${url}/interactivemodel`}>Interactive Model</NavLink>
		    </li>
		    <li className="nav-item">
			<NavLink exact className="nav-link" to={`${url}/model3`}>Model 3</NavLink>
		    </li>  
		</ul>
	    </div>
	    <Switch>
		<Route exact path={path}>
		    <Redirect to={`${url}/fourier-basedanalysis`} />
		</Route>
		<Route path={`${path}/:modelId`}>
		    <ModelTriage />
		</Route>
	    </Switch>
	</div>
    );
}

export default Modeling;
