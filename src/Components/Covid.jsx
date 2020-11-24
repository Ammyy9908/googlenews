import React,{useState,useEffect} from 'react'
import axios from 'axios';

function fnum(x) {
	if(isNaN(x)) return x;

	if(x < 9999) {
		return x;
	}

	if(x < 1000000) {
		return Math.round(x/1000) + "K";
	}
	if( x < 10000000) {
		return (x/1000000).toFixed(2) + "M";
	}

	if(x < 1000000000) {
		return Math.round((x/1000000)) + "M";
	}

	if(x < 1000000000000) {
		return Math.round((x/1000000000)) + "B";
	}

	return "1T+";
}

function Covid() {

    const [covidData,setCovidData] = useState(false);

    useEffect(async ()=>{
        const r = await axios.get('http://localhost:5000/api/get');
        setCovidData(r.data);
    },[]);
    return (
        <div className="covid">
            <div className="covid__header">
            <img src="https://img.icons8.com/ios/10s0/000000/coronavirus--v2.png"/>
            <div className="location__name">
                <p>India</p>
            </div>
            </div>
           <div className="covid__cases">
           <div className="total__case">
                <h3>Total Cases</h3>
                <span>{covidData &&  fnum((parseInt(covidData.active)+parseInt(covidData.recover)+parseInt(covidData.deaths)))}</span>
                
            </div>

            <div className="active__case">
            <h3>Active Cases</h3>
                <span>{covidData && fnum(covidData.active)}</span>
            </div>
            <div className="recovered__case">
            <h3>Recovered Cases</h3>
                <span>{covidData && fnum(covidData.recover)}</span>
            </div>
            <div className="death__case">
            <h3>Deaths</h3>
                <span>{covidData && fnum(covidData.deaths)}</span>
            </div>
           </div>
        </div>
    )
}

export default Covid
