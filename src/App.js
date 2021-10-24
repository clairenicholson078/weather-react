import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <div className="container shadow-lg">
        <img src="images/garden-gnome-g1b4de28b3_1280.png" alt="garden-gnome"></img>
        <Weather defaultCity="London" />
        <div> <hr/>This project was coded by <a href="https://clairenicholsondigital.co.uk"> Claire Nicholson </a> and is open-sourced on <a href="https://github.com/clairenicholson078/weather-react"> Github </a></div>
      </div>
    </div>
  );
}
