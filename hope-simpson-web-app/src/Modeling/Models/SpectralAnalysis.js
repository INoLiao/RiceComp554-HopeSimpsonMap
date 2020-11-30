import React from 'react';
import TableauDashboard from '../../TableauDashboard/TableauDashboard';

const TABLEAU_FFT_ANALYSIS_URL = 'https://public.tableau.com/views/seven_day_filtering_zero_padding_8KFFT/1';
const TABLEAU_SUN_DECLINATION_URL = 'https://public.tableau.com/views/SunDeclinationoverayear/1_1'
const TABLEAU_OPTIONS = { device: "desktop" };

function SpectralAnalysis() {
  return (
    <div>
        <div className="map-kanban rounded">
            <div className="display-4">Sun Declination</div>
            <p className="lead">In Spectral Analysis, Our goal is to find if Sun Declination would take effect on COVID-19.</p>
            <p className="lead">The following fomula is the declination of Sun over a year, where N is the day of the year beginning with N=0 at midnight Universal Time (UT) as January 1 begins.</p>
            <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/583fa421f34aaf0bc31729bebc784ed8d17d9742" alt="Sun Declination"></img>
        </div>
        <div style = {{height:400}}>
            <TableauDashboard 
            url={ TABLEAU_SUN_DECLINATION_URL }
            options={ TABLEAU_OPTIONS }
            />
        </div>
        <div className="map-kanban rounded">
            <div className="display-4">COVID-19 Data Spectral Analysis</div>
            <p className="lead">
                To observe the spectrum of COVID-19 cases, several regions in different latitudes are selected and compared with each other.
                In Spectral Analysis, we use FFT(<a href="https://en.wikipedia.org/wiki/Fast_Fourier_transform">Fast Fourier Transform</a>) to transform the Confirmed Case to the spectrum.
                And we have use following techniques to process our Data.
                <ul>
                    <li>To eliminate high-frequency rough harmonics, the Confirmed Cases are filtered by the Seven Day Average.</li>
                    <li>To see if can separate signals that are close in frequency, we apply Kaiser Window. (Currently,the window is a Rectangle window with beta = 0. And we will try other value of beta later.)</li>
                    <li>To eliminate a big spike in the zeroth component of the DFT, which is the average of the cases, the Confirmed Data was subtracted by the mean of the cases.</li>
                    <li>To improve the resolution of the FFT, we utilized zero paddings to extend the data into 8K length.</li>
                    <li>To fairly compare pair of regions have a difference in population, the FFTs are normalized by "the amplitude of the FFT divided by the maximum amplitude of the FFT".</li>
                </ul>
                Since we want to focus on the low-frequency components, the following plots are only the low-frequency parts of the FFTs.
            </p>
        </div>
        <TableauDashboard 
        url={ TABLEAU_FFT_ANALYSIS_URL }
        options={ TABLEAU_OPTIONS }
        />
    </div>
  );
}

export default SpectralAnalysis;