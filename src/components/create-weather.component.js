import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateWeather extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onEnter = this.onEnter.bind(this)
        this.state = {
            city: '',
            weatherDesc: '',
            temperature: 0,
            humidity: 0,
            weatherData: []
        }
    }
    
    handleChange(e) {
        this.setState({ city: e.target.value });
    }
        
    onEnter(e){
        e.preventDefault();
        
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&units=metric&APPID=<key>')
        .then(res => res.json())
        .then((data) => {
            this.setState({ weatherData: data });
        })
        .catch(console.log)

        console.log(this.state.weatherData.main);
        // const weather = {
        //     city: this.state.weatherData.name,
        //     weather: this.state.weatherData.weather.main,
        //     temp: this.state.weatherData.main.temp,
        //     humidity: this.state.weatherData.main.humidity
        // }
        //axios.post('http://localhost:5000/weathers/add', weather).then(res => console.log(res.data));
    
        //window.location = '/';
      }
    
    render() {
      return (
        <div>
            <h3>Add New Weather Card</h3>
            <form>
                <div className="form-group">
                    <label>City: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={ this.handleChange }
                        />
                </div>
        
                <div className="form-group">
                    <input type="button" value="Add city" className="btn btn-primary" onClick={ this.onEnter}/>
                </div>
            </form>
        </div>
      );
    }
  }
