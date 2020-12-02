import React from 'react';
import './Home.css';
import TableauDashboard from "../TableauDashboard/TableauDashboard";

// Tableau dashboard settings
const TABLEAU_WORLD_MAP_DASHBOARD_URL = 'https://public.tableau.com/views/hs-world-map-all/Dashboard-WorldMapAll';
const TABLEAU_OPTIONS = { device: ["desktop", "phone"] };

function Home() {
  return (
    <div className="home-container container">
      <h1 className="text-center">Exploring COVID-19 Cases Around the World</h1>
      <h2 className="text-center">Modern Tools Applied to a 90’s Concept</h2>
      <hr/>
      <p className="lead">A very cordial welcome to the home page for work done by some of the members of the fall class of COMP/ELEC 425/554! The class assignment was to create a platform based on modern databases, visualization, web design, virtual machines, signal processing, and data analysis. Then to use this platform to refresh past work, that studied the spread of the influenza virus, to our modern problem of COVID-19.</p>
      <p className="lead">On our Home page, you can begin a bit of exploration of your own looking at cases around the world. Explore the map, click on a location, and see a plot of the daily reported cases and a histogram of the cases, on a weekly basis.</p>
      <div style={{ height: 1050 }}>
        <TableauDashboard
          url={ TABLEAU_WORLD_MAP_DASHBOARD_URL }
          options={ TABLEAU_OPTIONS }
        />
      </div>
      <p className="lead">Then let us take you through a journey of some other ways to look at a worldwide viral pandemic. Here is what you can find on our other pages:</p>
      <ul>
        <li className="lead"><strong>About:</strong> A few slides giving you some background on our inspiration which is the life work of Robert Edgar Hope-Simpson (1908-2003), a general practitioner who studied, for sixty years, influenza cases around the world. Then a bit about where we get our data, and some things it has begun to show us.</li>
        <li className="lead"><strong>Map@Tableau:</strong> Using Tableau, a Hope-Simpson inspired look at COVID-19 by sampling regions around the world in four latitude zones, comparing and contrasting different regions, and showing a north-to-south longitudinal slice of the Americas.</li>
        <li className="lead"><strong>Map@GDS:</strong> Using Google Data Studio, explore fine controls for exploring the data by date, country, latitude and longitude, see another view of the four-zones concept, and another view of the longitudinal slice of the Americas.</li>
        <li className="lead"><strong>Modeling:</strong> See the early work of analysis that can be done on the data as we explore a compartmental network model for analysis of the virus spread and a Fourier-based analysis of the reported cases across the world.</li>
      </ul>
      <p className="lead">Finally, our site is designed to let you download the data you see to do your own investigation.</p>
      <p className="lead">Stay safe!</p>
    </div>
  );
}

export default Home;
