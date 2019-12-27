const location = "Buenos Aires,ar"
const api_key = "c275a5ef128d1326a8d877d961686ba7";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";



export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;