import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';


import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./client/store/configureStore";

import App from "./App";
import { startGetUser } from "./client/actions/userAction";
import { startGetTotolUser } from "./client/actions/userAction";
import { startGetInvestment } from "./client/actions/investmentAction";
import { startGetWithdrawal } from "./client/actions/withdrawalAction";


const store = configureStore();
console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

if (localStorage.getItem("authToken")) {
  console.log("authtoken");
  store.dispatch(startGetUser());
}

if (localStorage.getItem("authToken")) {
    console.log("authtoken");
    store.dispatch(startGetTotolUser());
  }
  if (localStorage.getItem("authToken")) {
    console.log("authtoken");
    store.dispatch(startGetInvestment());
  }
  if (localStorage.getItem("authToken")) {
    console.log("authtoken");
    store.dispatch(startGetWithdrawal());
  }


const jsx = (
  <Provider store={store}>
   <BrowserRouter>
     <App />
   </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  

  jsx,

  document.getElementById("root")
);



