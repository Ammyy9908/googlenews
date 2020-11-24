import React, { useState, useEffect } from "react";
import Covid from "../Components/Covid";
import Navbar from "../Components/Navbar";
import NewsMedium from "../Components/NewsMedium";
import Sidebar from "../Components/Sidebar";
import Weather from "../Components/Weather";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


export default function Home({keyword}) {
  const [weather, setWeather] = useState(false);
  const [sidenav, setSideNav] = useState(true);
  const [style, setStyle] = useState('3fr 2fr');
  const [newsData,setNews] = useState(null);

  console.log(newsData && newsData);
  console.log(weather && weather);



  useEffect(async () => {
    navigator.geolocation.getCurrentPosition(async (success, err, option) => {
      if (err) {
        alert(err.message);
      }
      else {
        console.log(success);
        let r = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${success.coords.latitude}&lon=${success.coords.longitude}&appid=10b151862c9f7cf37cd60d00eeeec53c`);
        console.log(r.data);



        if (r) {
          setWeather({
            city: r.data.name,
            tempMain: parseInt(r.data.main.temp) - 273.15,
            description: r.data.weather[0].description,
            icon: r.data.weather[0].icon,
            country: r.data.sys.country
          })
        }



      }
    })

  }, []);


  async function getNews(query){
    let keywords = ['business', 'technology', 'sports', 'entertainment', 'science', 'fitness', 'world'];
    let cat = keywords[Math.floor(Math.random() * (0, keywords.length))];
    fetch(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=0a2a6e16afbd48de85b62a4880c6bb12`).then((response) => {
      return response.json()
    }).then((data) => {
      // console.log(data.articles);
      setNews(data.articles);
      return true;
      
    }).catch((err) => {
      console.log(err);
    })
  }





  React.useEffect(async () => {
    getNews(keyword && keyword);

    
  }, [keyword && keyword]);
  return (
    <div className="home">
      {/* Navbar */}
      <Navbar setSideNav={setSideNav} sidenav={sidenav} setStyle={setStyle} getNews={getNews}/>
      {!newsData && <LinearProgress color="primary" />}
      <div className="home__main">
        {sidenav && <Sidebar />}
        {/* Home Container */}
        <div className="home__container" style={{ 'margin': style }}>

          <div className="news__post">
            <Covid />
            {newsData && newsData.map((item) => {
              return <NewsMedium title={item.title} img={item.urlToImage} source={item.source} timestamp={item.publishedAt} url={item.url} />
            })}
          </div>
          <div className="widgets">
            <Weather weather={weather} />
          </div>
        </div>
      </div>
    </div>
  );
}
