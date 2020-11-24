import React from 'react'
import cloudy from '../img/animated/cloudy-night-3.svg'
import zero1 from '../img/animated/01d.svg'
import zero12 from '../img/animated/01n.svg'
import zero2 from '../img/animated/02d.svg'
import zero22 from '../img/animated/02n.svg'
import zero3 from '../img/animated/03d.svg'
import zero32 from '../img/animated/03n.svg'
import zero4 from '../img/animated/04d.svg'
import zero42 from '../img/animated/04n.svg'
import zero9 from '../img/animated/09d.svg'
import zero92 from '../img/animated/09n.svg'
import tenDay from '../img/animated/10d.svg'
import tenNight from '../img/animated/10n.svg'
import elevenDay from '../img/animated/11d.svg'
import elevenNight from '../img/animated/11n.svg'
import thirteenDay from '../img/animated/13d.svg'
import thirteenNight from '../img/animated/13n.svg'
import fiftyDay from '../img/animated/50d.svg'
import fiftyNight from '../img/animated/50n.svg'


function Weather({weather}) {
    let icon ='';
    switch(weather && weather.icon){
        case '01d':
            icon = zero1;
            break;
        case '01n':
            icon = zero12;
            break;
        case '02d':
            icon =zero2;
            break;
        case '02n':
            icon =zero22;
            break;
        case '03d':
            icon = zero3;
            break;
        case '03n':
            icon =zero32;
            break;
        case '04d':
            icon = zero4;
            break;
        case '04n':
            icon = zero42;
            break;
        case '09d':
            icon =zero9;
            break;
        case '09n':
            icon =zero92;
            break;
        case '10d':
            icon =tenDay;
            break;
        case '10n':
            icon =tenNight;
            break;
        case '11d':
            icon = elevenDay;
            break
        case '11n':
            icon = elevenNight;
            break;
        case '13d':
            icon = thirteenDay;
            break;
        case '13n':
            icon = thirteenNight;
            break;
        case '50d':
            icon = fiftyDay;
            break;
        case '50n':
            icon = fiftyNight;
            break;
        default:
            icon = cloudy;
            

    }
    return (
        <div className="weather">
            <div className="weather__header">
                <span>{weather && weather.city}</span>
            </div>
            <div className="weather__body">
                <div className="weather__body__top">
                    <div className="basic_weather__info">
                        <p>{weather && weather.description}</p>
                        <span>{weather && Math.round(weather.tempMain)}</span><span><sup>o</sup></span><span>C</span>
                    </div>
                    <div className="weather__icon__main">
                    {weather &&<img src={icon}/>}
                    {/* {weather && weather.description.includes("rain")&&<img src={rainy}/>}
                    {weather && weather.description.includes("clear")&&<img src={day}/>}
                    {weather && weather.description.includes("mist")&&<img src={fogy}/>} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
