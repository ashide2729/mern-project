import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import WeatherList from "./components/weather-list.component";
import CreateWeather from "./components/create-weather.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={WeatherList} /> 
        <Route path="/create" exact component={CreateWeather} />  
      </div>
    </Router>
  );
}

export default App;
