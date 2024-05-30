const getWeatherData = async (city) => {
    const url = `https://api.meteo.lt/v1/places/${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'api.meteo.lt'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};

export { getWeatherData }