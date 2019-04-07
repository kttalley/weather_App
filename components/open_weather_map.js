const WEATHER_API_KEY = "625ff06719e9182b8e0ffb1ed3698ad7";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";


function zipURL(zip) {
    return '${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}';
}

function fetchForecast(zip) {
    return fetch(zipURL(zip))
    .then(response => response.json())
    .then(responsJSON => {
        return {
            main: responsJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
        };
    })
    .catch(error => {
        console.error(error);
    });
}

export default { fetchForecast: fetchForecast };