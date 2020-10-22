import React from 'react';
import './Map.css';
import TableauDashboard from "../TableauDashboard/TableauDashboard";

// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/COVID19WorldMap/Dashboard-WorldMap';
const TABLEAU_REGION_COMPARISON_DASHBOARD_URL = 'https://public.tableau.com/views/COVID-19RegionComparison/Dashboard-RegionComparison';
const TABLEAU_OPTIONS = { device: "desktop" };

function Map () {
  return (
    <div className="Map-container container align-items-center">
      <TableauDashboard
        url={ TABLEAU_WORLD_MAP_DASHBOARD_URL }
        options={ TABLEAU_OPTIONS }
      />

      <hr/>

      <TableauDashboard
        url={ TABLEAU_REGION_COMPARISON_DASHBOARD_URL }
        options={ TABLEAU_OPTIONS }
      />
    </div>
  );
}

export default Map;
