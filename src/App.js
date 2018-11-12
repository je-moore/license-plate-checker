import React, { PureComponent } from "react";
import PlateChecker from "./components/PlateChecker";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>License Plate Checker</h1>
          </header>
          <div className="App-body">
            <PlateChecker />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
