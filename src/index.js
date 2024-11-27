import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import reportWebVitals from "./reportWebVitals";

const paypalOptions = {
  "client-id": "AcLogQ3HZFGJ_BT5uIk1GigWtUwbssi8psHmUEYXzEcl7vlzuQ5hw7ZvvZ87ZmvH7Fv4qIXs61PLt0rl",
  currency: "USD",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={paypalOptions}>
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
