import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const WeatherApp = () => {
  // State variables
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key

  // Fetch weather data whenever the city or unit changes
  useEffect(() => {
    if (city !== '') {
      setLoading(true);
      setError('');

      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`)
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError('City not found. Please try again.');
          setLoading(false);
        });
    }
  }, [city, unit]);

  // Handle city search input
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Handle unit toggle (Celsius/Fahrenheit)
  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  // Dynamic background based on weather condition
  const getBackground = () => {
    if (!weatherData) return 'bg-default';

    const weatherCondition = weatherData.weather[0].main.toLowerCase();
    if (weatherCondition.includes('rain')) {
      return 'bg-rainy';
    } else if (weatherCondition.includes('clear')) {
      return 'bg-sunny';
    } else if (weatherCondition.includes('cloud')) {
      return 'bg-cloudy';
    }
    return 'bg-default';
  };

  return (
    <div className={`app ${getBackground()}`}>
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={() => setCity(city)}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && !loading && !error && (
        <div className="weather-details">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>
            Temperature: {weatherData.main.temp}° {unit === 'metric' ? 'C' : 'F'}
          </p>
          <button onClick={toggleUnit}>
            Toggle to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
