const showWeatherData = (weatherData) => {
  document.getElementById('cityName').innerText = weatherData.name;
  document.getElementById('weatherType').innerText = weatherData.weather[0].main;
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min;
  document.getElementById('max-temp').innerText = weatherData.main.temp_max;
};

export { showWeatherData }