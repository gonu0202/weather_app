import { useState } from 'react';
import axios from 'axios';
import CityInput from '../components/CityInput';
import WeatherDisplay from '../components/WeatherDisplay';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    try {
      setError(null);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/weather/${city}`);
      setWeatherData(response.data);
    } catch (error) {
      setError('City not found or other error');
    }
  };

  return (
    <div>
      <CityInput getWeather={getWeather} />
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}
