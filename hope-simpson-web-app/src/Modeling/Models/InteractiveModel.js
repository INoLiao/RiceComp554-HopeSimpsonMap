import React, { Component } from 'react';
import * as d3 from 'd3';

//function InteractiveModel() {
class InteractiveModel extends Component {
    constructor(props) {
	super(props);
	this.myChart = React.createRef();
    }

    componentDidMount() {
	this.displayChart();
    }
    
    componentDidUpdate() {
	this.displayChart();
    }

    generateData(param, initialValues) {
	const total_time = 3500;
	let current_date = new Date('2020-02-02');
	
	let s = initialValues.S;
	let s_next;
	let e = initialValues.E;
	let e_next;
	let i = initialValues.I;
	let i_next;
	let r = initialValues.R;
	let r_next;
	
	var data = [
	    {
		timestamp: new Date(current_date),
		susceptible: s,
		exposed: e,
		infected: i,
		recovered: r
	    }
	];

	for (let j=0; j < total_time - 1; j++) {
	    s_next = s - param.beta*i*s + param.etha*r;
	    e_next = e + param.beta*i*s - param.alpha*e;
	    i_next = i + param.alpha*e - param.ro*i;
	    r_next = r + param.ro*i - param.etha*r;
	    s = s_next;
	    e = e_next;
	    i = i_next;
	    r = r_next;
	    current_date.setDate(current_date.getDate() + 1);
	

	    let new_data = {
		timestamp: new Date(current_date),
		susceptible: s_next,
		exposed: e_next,
		infected: i_next,
		recovered: r_next
	    };
	    
	    data.push(new_data);
	}
	return data;
    }

    plotLine(data) {
	//Define general dimension parameters
	var outerWidth = 800;
	var outerHeight = 550;
	var margin = { left: 70, top: 5, right: 5, bottom: 60 };
	var innerWidth  = outerWidth  - margin.left - margin.right;
	var innerHeight = outerHeight - margin.top  - margin.bottom;
	var xColumn = "timestamp";
	var yColumn = "infected";
	var xAxisLabelText = "Time";
	var xAxisLabelOffset = 48;
	var yAxisLabelText = "Temperature °C";
	var yAxisLabelOffset = 40;

	//Append svg element to the page
	const svg = d3.select(this.myChart.current).append("svg")
	      .attr("width",  outerWidth)
              .attr("height", outerHeight);
	var g = svg.append("g")
            .attr("transform",
		  "translate(" + margin.left + "," + margin.top + ")");
	var path = g.append("path")
	    .attr("class", "chart-line");
	var xAxisG = g.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0, " + innerHeight + ")");
	var xAxisLabel = xAxisG.append("text")
	    .style("text-anchor", "middle")
            .attr("transform", "translate(" + (innerWidth / 2) + "," + xAxisLabelOffset + ")")
            .attr("class", "label")
            .text(xAxisLabelText);
	var yAxisG = g.append("g")
            .attr("class", "y axis");
	var yAxisLabel = yAxisG.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(-" + yAxisLabelOffset + "," + (innerHeight / 2) + ") rotate(-90)")
            .attr("class", "label")
            .text(yAxisLabelText);

	//Prepare function to scale input to pixel values
	var xScale = d3.scaleTime().range([0, innerWidth]);
	var yScale = d3.scaleLinear().range([innerHeight, 0]);
	xScale.domain( d3.extent(data, function (d){ return d[xColumn]; }));
	yScale.domain( d3.extent(data, function (d){ return d[yColumn]; }));

	//Draw Line
	const line = d3.line()
	      .x(function(d) { return xScale(d[xColumn]); })
              .y(function(d) { return yScale(d[yColumn]); });
	path.attr("d", line(data));

	//Draw axis
	const xaxis = d3.axisBottom()
              .ticks(d3.timeYear.every(1))
	      //.tickFormat(d3.timeFormat('%b %y'))
	      .scale(xScale);
	const yaxis = d3.axisLeft()
	      //.ticks(data.length)
	      .scale(yScale);
	xAxisG.call(xaxis);
	yAxisG.call(yaxis);
    }
    
    displayChart() {
	const parameters = {
	    beta: 0.1,
	    alpha: 0.015,
	    ro: 0.05,
	    etha: 0.02
	};

	const initialValues = {
	    S: 0.9,
	    E: 0.09,
	    I: 0.01,
	    R: 0
	};

	const data = this.generateData(parameters, initialValues);

	this.plotLine(data);
    }
    
    render() {
	return (
	    <div>
		<div>
		    <p>Ratio of Infected People Over Time</p>
		</div>
		<div ref={this.myChart}></div>
	    </div>
	);
    }
}

export default InteractiveModel;
