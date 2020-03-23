import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateWeather extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onEnter = this.onEnter.bind(this)
        this.state = {
            city: '',
            weather: '',
            temperature: 0,
            date: '',
            weatherData: []
        }
    }
    
    handleChange(e) {
        this.setState({ city: e.target.value });
    }
        
    onEnter(e){
        e.preventDefault();
        
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+'&units=metric&APPID=cd648da3327777260b63e3a221e02fbd')
        .then(res => res.json())
        .then((data) => {
            this.setState({ weatherData: data });
        })
        .catch(console.log)

        // const weather = {
        //     city: this.state.city,
        //     weather: data.main.weather,
        //     temp: data.main.temp,
        //     date: data.main.date
        // }
          
        //this.state.weatherData.main
    
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