import React from 'react';
import './Map.css';

const GDS_REPORT_PATHS = [
  // Overview
  "https://datastudio.google.com/embed/reporting/30c1e5a8-6cbf-43ba-9796-b4bb042082f6/page/TxgjB",
  // Four Zones
  "https://datastudio.google.com/embed/reporting/30c1e5a8-6cbf-43ba-9796-b4bb042082f6/page/cm8pB"
]

class MapGDS extends React.Component{
  constructor(props) {
    super(props);
    this.state = { view: 0 };
  }

  handleChangeView(viewId, event) { 
    event.preventDefault();
    this.setState({ ...this.state, view: viewId});
  }

  render() {
    console.log(this.state);
    return (
      <div className="map-container container align-items-center">
        <ul className="nav nav-tabs justify-content-end">
          <li className="nav-item disabled">
            <a className="nav-link disabled" href="/#">COVID-19 World Map <span style={{fontSize: "xx-small"}}>Powered by Google Data Studio</span></a>
          </li>
          <li className="nav-item">
            <a className={ "nav-link " + (this.state.view === 0 ? "active" : "") } 
              onClick={ (e) => this.handleChangeView(0, e) } href="/#">Overview</a>
          </li>
          <li className="nav-item">
            <a className={ "nav-link " + (this.state.view === 1 ? "active" : "") } 
              onClick={ (e) => this.handleChangeView(1, e) } href="/#">Four Zones Concept</a>
          </li>
        </ul>
        { 
          GDS_REPORT_PATHS.map((report, idx) => {
            return <iframe width="1110px" height="910px" frameBorder="0" title="COVID-19 Map with GDS" 
            key={ idx } src={ report }
            allowFullScreen style={this.state.view === idx ? {position: "absolute"} : { position: "absolute", top: "-5000px" }}/>
          })
        }
      </div>
    );
  }
  


}


export default MapGDS;
