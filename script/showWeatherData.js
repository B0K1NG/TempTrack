const showWeatherData = ({place, forecastTimestamps}) => {
  const {
    conditionCode = 'N/A',
    airTemperature = 'N/A',
    feelsLikeTemperature = 'N/A',
    seaLevelPressure = 'N/A',
  } = forecastTimestamps[0] || {};

  document.getElementById('cityName').innerText = place.name;
  document.getElementById('weatherType').innerText = conditionCode;
  document.getElementById('temp').innerText = airTemperature;
  document.getElementById('feels-like').innerText = feelsLikeTemperature;
  document.getElementById('sea-level-pressure').innerText = seaLevelPressure;
};

export { showWeatherData }
