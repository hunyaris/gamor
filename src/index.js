import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Login/Login';
import './Login/Login.css';
import {  BrowserRouter} from "react-router-dom";
import LoginApi from "./LoginApi";
import SearchC from "./SearchC";
import Data from './Data';
import User from './User'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <BrowserRouter>
  //   <React.StrictMode>
  //       {/* <Login/> */}
  //       <App />
  //       {/* <SearchC/> */}
  //       {/* <LoginApi/> */}
  //     </React.StrictMode> </BrowserRouter>

  <BrowserRouter>
    <React.StrictMode>
      {/* <Login/> */}
      <App />
      {/* <SearchC/> */}
      {/* <LoginApi/> */}
      {/* <Data /> */}
      {/* <User /> */}
    </React.StrictMode>
  </BrowserRouter>
);


