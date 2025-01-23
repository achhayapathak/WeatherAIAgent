import "dotenv/config"

const getWeatherDetails = async (city) => {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
    const response = await fetch(url);
    const data = await response.json();
    return JSON.stringify(data);
};

export default getWeatherDetails;
