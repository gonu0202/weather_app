export default function WeatherDisplay({ data }) {
    return (
      <div>
        <p>Temperature: {data.temperature} °C</p>
        <p>Humidity: {data.humidity} %</p>
        <p>Wind Speed: {data.windSpeed} m/s</p>
        <p>Description: {data.description}</p>
      </div>
    );
  }
  