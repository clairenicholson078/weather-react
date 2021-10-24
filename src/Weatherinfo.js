import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo(props) {
  console.log(props.data);
  return (
    <div className="currentweather">
      <h1>
        {" "}
        {props.data.city} | <b> {props.data.roundedtemp}°C </b>
        
      </h1>
      <p>
        <br />
        {props.data.description}
        <br />
        Humidity: {props.data.humidity}% Wind: {props.data.wind} mph
      </p>
      <WeatherIcon code={props.data.icon} size={60} />
    </div>
  );
}
