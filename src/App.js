import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"> </header>
      <div className="container shadow-lg">
        <Weather defaultCity="London" />
      </div>
    </div>
  );
}
