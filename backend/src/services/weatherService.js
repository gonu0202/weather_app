require('dotenv').config();
const axios = require('axios');

const getWeatherByCity = async (city) => {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description
    };
  } catch (error) {
    throw new Error('City not found or other error');
  }
};

module.exports = {
  getWeatherByCity
};
