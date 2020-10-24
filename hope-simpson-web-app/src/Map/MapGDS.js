import React from 'react';
import './Map.css';

const GDS_REPORT_PATH = "https://datastudio.google.com/embed/reporting/30c1e5a8-6cbf-43ba-9796-b4bb042082f6/page/TxgjB"
function MapGDS () {
  return (
    <div className="Map-container container align-items-center">
      <iframe width="100%" height="850px" title="COVID-19 Map with GDS"
        src={ GDS_REPORT_PATH }
        frameborder="0"  allowfullscreen />
    </div>
  );
}

export default MapGDS;
