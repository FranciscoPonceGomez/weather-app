import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "7323ba2b21f2173440e089c84c12d6a6";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`);
    const dataJSON = await data.json();
    console.log(dataJSON);
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
