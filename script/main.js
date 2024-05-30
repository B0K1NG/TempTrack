import { getWeatherData } from "./fetchApi.js";
import { searchCity } from "./citySearch.js";
import { showWeatherData } from "./showWeatherData.js";

getWeatherData();
document.querySelector('.button__btn').addEventListener('click', searchCity);
showWeatherData();