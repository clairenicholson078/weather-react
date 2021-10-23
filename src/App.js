import "./App.css";
import Searchengine from "./Searchengine";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1> Weather </h1>
          <div className="row">
            <div className="col-md-6">
              <Searchengine />
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
