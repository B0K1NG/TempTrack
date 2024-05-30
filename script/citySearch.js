import { getWeatherData } from "./fetchApi.js";
import { showWeatherData } from "./showWeatherData.js";

const searchCity = async () => {
    const city = document.getElementById('cityInput').value;

    try {
        const data = await getWeatherData(city);
        showWeatherData(data);
    } catch (error) {
        console.log(error);
    }
};

export { searchCity };
