import React from 'react';
import './Map.css';
import TableauDashboard from "../TableauDashboard/TableauDashboard";

// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/COVID19WorldMap/Story-WorldMap';
const TABLEAU_OPTIONS = { device: "desktop" };

function Map () {
  return (
    <div className="map-container container align-items-center">
      <div className="map-kanban rounded">
        <div className="display-4">COVID-19 Data Visualization</div>
        <p className="lead">Inspired by Hope-Simpson's studies on influenza, we visualized COVID-19 daily confirmed cases in three different ways: <strong>COVID-19 World Map</strong>, <strong>North to South Slice of America</strong>, and <strong>Region Comparisons</strong>. Our goal is to find whether the seasonally mediated mechanism takes effect on COVID-19 as it did on influenza.</p>
      </div>
      <TableauDashboard
        url={ TABLEAU_WORLD_MAP_DASHBOARD_URL }
        options={ TABLEAU_OPTIONS }
      />
    </div>
  );
}

export default Map;
