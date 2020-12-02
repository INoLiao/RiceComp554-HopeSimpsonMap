import React from 'react';
import TableauDashboard from "../TableauDashboard/TableauDashboard";

// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/COVID-19WorldMapAll/Dashboard-WorldMapAll';
const TABLEAU_OPTIONS = { device: "desktop" };

function Home() {
  return (
    <div className="home-container container">
      <TableauDashboard
        url={ TABLEAU_WORLD_MAP_DASHBOARD_URL }
        options={ TABLEAU_OPTIONS }
      />
    </div>
  );
}

export default Home;
