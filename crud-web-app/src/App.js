import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Candidate from "./components/Cadidates";

function App() {
  return (
    <Provider store={store}>
      <Candidate />
    </Provider>
  );
}

export default App;
