import React from 'react';
import './Map.css';
import TableauDashboard from "../TableauDashboard/TableauDashboard";

// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/COVID19WorldMap/Story-WorldMap';
const TABLEAU_OPTIONS = { device: "desktop" };

function Map () {
  return (
    <div className="map-container container text-center">
      <TableauDashboard
        url={ TABLEAU_WORLD_MAP_DASHBOARD_URL }
        options={ TABLEAU_OPTIONS }
      />
    </div>
  );
}

export default Map;
