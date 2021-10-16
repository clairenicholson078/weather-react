import React, { useState } from "react";
import axios from "axios";

export default function Searchengine() {
  let [city, setCity] = useState("");
  let [load, setLoad] = useState(false);
  let [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `cb957f6011cbe58c2051d26f28640ef9`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function showTemperature(response) {
    setLoad(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        onChange={updateCity}
        type="Search"
        placeholder="Search for a city"
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (load) {
    return (
      <div>
        {" "}
        {form} <br />{" "}
        <ul className="weather">
          {" "}
          <li> Here's the weather in {city} </li>{" "}
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
          <br /> <strong>Temperature:</strong> {Math.round(weather.temperature)}{" "}
          ºC
          <li>
            {" "}
            <strong>Description:</strong> {weather.description}{" "}
          </li>{" "}
          <li>
            <strong>Humidity:</strong> {Math.round(weather.humidity)} %
          </li>
          <li>
            <strong>Wind:</strong> {weather.wind} km/h
          </li>
        </ul>
      </div>
    );
  } else {
    return <div> {form} </div>;
  }
}
