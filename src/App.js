import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";

class App extends Components {
  render() {
    return (
      <div className="App">
        <Greet />
      </div>
    );
  }
}

export default App;
