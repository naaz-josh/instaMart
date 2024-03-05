import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "../src/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./redux/api/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ApiProvider api={apiSlice}>
    <Provider store={Store}>
        
      <ToastContainer
        theme="dark"
        pauseOnHover={false}
        position="top-right"
        autoClose={3000}
        closeOnClick
      />
          <App />
  

   
     
      <ToastContainer />
    </Provider>
    </ApiProvider>
  </BrowserRouter>
);
