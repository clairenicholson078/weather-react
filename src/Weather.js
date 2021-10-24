import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      roundedtemp: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
 const apiKey = "5562088dc6a08cb31f02b4a3aba8768d";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="row d-flex flex-row">
          <div className="col-md-4">

                                    <FormattedDate date={weatherData.date} />

            <WeatherInfo data={weatherData} />

          </div>
          <div className="col-md-8 forecast">
            <WeatherForecast coordinates={weatherData.coordinates} /> 
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
