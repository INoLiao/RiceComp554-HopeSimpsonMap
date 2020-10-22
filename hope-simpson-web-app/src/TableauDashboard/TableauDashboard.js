import React, { useRef, useEffect } from 'react';
import './TableauDashboard.css';

function TableauDashboard(props) {

  const ref = useRef(null);

  // Initialize Tableau dashboard object
  useEffect(() => initViz());

  const initViz = () => {
    return new window.tableau.Viz(ref.current, props.url, props.options);
  };

  return (
    <div>
      <div ref={ ref } id="TableauDashboard" />
    </div>
  );
}

export default TableauDashboard;
