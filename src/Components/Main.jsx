import React, { useEffect, useState } from 'react'
import './Main.css'
import search_icon from './Assets/search.png';
import clear_icon from './Assets/clear.png';
import cloud_icon from './Assets/cloud.png';
import drizzle_icon from './Assets/drizzle.png';
import rain_icon from './Assets/rain.png';
import snow_icon from './Assets/snow.png';
import humidity_icon from './Assets/humidity.png';
import wind_icon from './Assets/wind.png';


function Main() {

  const api_key="f5de60e0d6fca3c4a5d4db16099f1313"
  const [place,setPlace]=useState('');
  const [wicon,setWicon]=useState(clear_icon);
  const display =async()=>{
    const base_url=`https://api.openweathermap.org/data/2.5/weather?q=kochi&units=Metric&appid=${api_key}`
    const response = await fetch(base_url);// fecth url
      const data = await response.json();
      const humidity=document.getElementById('humidity-precent');
      const wind=document.getElementById('wind-rate');
      const temperature=document.getElementById('weather-temp');
      const location=document.getElementById('weather-location');
      humidity.innerHTML=data.main.humidity+'%';
      wind.innerHTML=Math.floor(data.wind.speed) +'km/h';
      temperature.innerHTML=Math.floor(data.main.temp)+' °C';
      location.innerHTML=`${data.name}`;
      if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){
          setWicon(clear_icon)
        }
        else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
          setWicon(cloud_icon)
        }
        else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
          setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
          setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
          setWicon(rain_icon)
        }
        else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
          setWicon(rain_icon)
        }
        else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
  
          setWicon(search_icon)
        }
        else{
          search_icon(clear_icon)
        }

    
    // document.getElementById('weather-body').style.display='none';
  }

  const search =async (e)=>{
    console.log(place);
    if (place==='') {
      alert('Please enter the location')
      
    }
    else{
      // document.getElementById('weather-body').style.display='block';
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=Metric&appid=${api_key}`
      const response = await fetch(url);// fecth url
      const data = await response.json();//convert the object to array
      console.log(data);
      const humidity=document.getElementById('humidity-precent');
      const wind=document.getElementById('wind-rate');
      const temperature=document.getElementById('weather-temp');
      const location=document.getElementById('weather-location');
      humidity.innerHTML=data.main.humidity+'%';
      wind.innerHTML=Math.floor(data.wind.speed) +'km/h';
      temperature.innerHTML=Math.floor(data.main.temp)+' °C';
      location.innerHTML=`${data.name}`;
      if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n'){
          setWicon(clear_icon)
        }
        else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
          setWicon(cloud_icon)
        }
        else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
          setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
          setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n'){
          setWicon(rain_icon)
        }
        else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n'){
          setWicon(rain_icon)
        }
        else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
  
          setWicon(search_icon)
        }
        else{
          search_icon(clear_icon)
        }


      // .then(res=> res.json())
      // .then(data=>setWeather(data))

      // console.log(wheather);
    }
    setPlace('');

  }

  return (
    <div  className='weather-container mb-5' onLoad={display}>
      <div className="top-bar">
        <input type="text" value={place} onChange={(e)=>setPlace(e.target.value)}  className="cityInput" placeholder='Search'/>
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div id="weather-body">
        <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp" id='weather-temp'>24°c</div>
      <div className="weather-location" id='weather-location'>London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-precent" id='humidity-precent'>64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate" id='wind-rate'>18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>


      </div>
      

    </div>
  )
}

export default Main