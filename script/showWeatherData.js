const showWeatherData = (weatherData) => {
  document.getElementById('cityName').innerText = weatherData.place.name;
  document.getElementById('weatherType').innerText = weatherData.forecastTimestamps[0]?.conditionCode || 'N/A';
  document.getElementById('temp').innerText = weatherData.forecastTimestamps[0]?.airTemperature || 'N/A';
  document.getElementById('feels-like').innerText = weatherData.forecastTimestamps[0]?.feelsLikeTemperature || 'N/A';
  document.getElementById('sea-level-pressure').innerText = weatherData.forecastTimestamps[0]?.seaLevelPressure || 'N/A';
};

export { showWeatherData }