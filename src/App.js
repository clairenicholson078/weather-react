import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import gnome from "./gnome.png";


export default function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <div className="container shadow-lg">
                <Weather defaultCity="London" />
    <div> <hr/>This project was coded by <a href="https://clairenicholsondigital.co.uk" target="_blank" rel="noreferrer" > Claire Nicholson </a> and is open-sourced on <a href="https://github.com/clairenicholson078/weather-react" target="_blank" rel="noreferrer"> Github</a>, hosted on <a href="https://infallible-brattain-f84cf9.netlify.app" target="_blank" rel="noreferrer"> Netlify </a><br/>
            <img src={gnome} width="100px" alt="gnome"/>
</div>
      </div>
    </div>
  );
}
