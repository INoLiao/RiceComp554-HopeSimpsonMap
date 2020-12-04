import React from 'react';
import { useParams } from 'react-router-dom';
import './Models.css';
import SpectralAnalysis from './SpectralAnalysis';
import VirusSpreadingModel from "./VirusSpreadingModel";

function ModelTriage() {
  let { modelId } = useParams();

  return (
    <div className="model-triage-container container">
      { modelId === 'virusspreadingmodel' && <VirusSpreadingModel /> }
      { modelId === 'fourier-basedanalysis' && <SpectralAnalysis/> }
      { modelId === 'model3' && <h3>Model 3</h3> }
    </div>
  )
}

export default ModelTriage;
