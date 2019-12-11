import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { createStore } from "redux";
import reducer from "./store/Reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
