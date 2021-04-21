import React from 'react';

const SEIR_IMAGE_PATH = '/assets/seir-model.png';
const NETWORK_IMAGE_PATH = '/assets/network-counties.png';
const MODEL_PARAM_PATH = '/assets/model_params.png'

function CompartmentalNetworkModel() {
	return (
		<div>
			<h3>Compartmental Network Models</h3>
			<h4>Introduction</h4>
			<p>
			The COVID-19 pandemic has had a significant impact on every country in the world. Being able to forecast the spread of COVID-19 is important to hospitals, 
                        policy makers, vaccine manufacturers, and even the general population. Because covid-19 is a pandemic at a scale that has rarely been seen, 
                        standard time-series modeling does not work well. Some factors include that the virus progression influences policy changes, many undocumented cases, and noisy data collection problems.<br></br><br></br>
			Compartmental models, such as the SEIR model, are commonly used for infectious diseases because of their simplicity and few number of parameters. 
                        The fundamentals of compartmental modeling of infectious diseases are nearly a hundred years old. 
                        For example, Kermack and McKendrick proposed a simple compartmental model with differential equations that assign individuals to be susceptible, 
                        infected or recovered (SIR) compartments. Several infectious diseases, including COVID-19, manifest an incubation period during which an individual is infected but is not yet a spreader. 
                        Therefore, an Exposed (E) compartment can be added, which results in an SEIR model. Each person is considered to be in 1 compartment at a time, but can move to another compartment based on the parameters of the model. N = S + E+ I + R represents the entire population of people. 

			</p>
			<p className="img-align">
				<img src={ SEIR_IMAGE_PATH } alt="" className="img-SEIR-model"/>
			</p>

			<h4>Model Parameters</h4>
			
			<p className="img-align">
				<img src={ MODEL_PARAM_PATH } alt="" className="img-SEIR-model"/>
			</p>

	                <p>
			<b>Beta</b> <br></br>
			Average contacts rate. Controls the rate of the spread of the virus and the average number of contacts per person. <br></br><br></br>

			<b>Alpha</b> <br></br>
			The incubation rate. The rate of latent individuals becoming infectious (average duration of incubation is 1/Alpha). <br></br><br></br>

			<b>Rho</b> <br></br>
			The recovery rate, which is affected by the duration of the disease. <br></br><br></br>

			<b>Eta</b> <br></br>
			The rate of recovered individuals that become susceptible to COVID-19 because of loss of immunity. <br></br>
			</p>

			<h4>Time-varying modeling of variables:</h4>
			<p>
				Ideally, instead of using static rate variables across time to model compartment transitions as in standard compartmental models, there should be time-varying functions that map them from known observations.
				For example, if human mobility decreases over time, the S to E transition should reflect that.
			</p>
			<p>
				Another known effect of respiratory infections is the sesonal pattern. For instance, the Influenza virus is known for its peak around the winter months. Following the same idea we can model the Covid-19 evolution with an infection rate that is a function of the sun declination. Check our interactive model on the next tab to see the results and play with the parameters.
			</p>

			<h4>Features from the location network graph (Future Work):</h4>
			<p>
				One way to incorporate inter-county effects is to represent the counties as nodes in a network graph with edges representing land borders.
				A simple model of the inter-county effects is one or more aggregation functions applied to the immediate neighborhood of each county, and the results incorporated as new features for that county.
			</p>
			<p className="img-align">
				<img src={ NETWORK_IMAGE_PATH } alt="" className="img-network-counties"/>
			</p>

			<p>
				Source: &nbsp;
				<a href="http://storage.googleapis.com/covid-external/COVID-19ForecastWhitePaper.pdf">
					Arik, Sercan, et al. "Interpretable Sequence Learning for COVID-19 Forecasting." <em>Advances in Neural Information Processing Systems 33</em> (2020).
				</a>
			</p>
		</div>
	);
}

export default CompartmentalNetworkModel;
