import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Candidate from "./components/Cadidates";
import { Container } from "@material-ui/core";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss>
        {" "}
        <Container maxWidth="lg">
          <Candidate />
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
