import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import moviesReducer from "./reducers/index";

// we createStore receives reducers as an argument
const store = createStore(moviesReducer);
console.log(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);
