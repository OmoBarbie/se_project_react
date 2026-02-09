import { request } from "./api";

export const getWeather = ({ latitude, longitude }, APIkey) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;
  return request(url);
};

export const filterWeatherData = (data) => {
  const result = {};

  const tempF = data.main.temp;
  const tempC = Math.round(((tempF - 32) * 5) / 9);

  result.city = data.name;

  result.temp = {
    F: tempF,
    C: tempC,
  };

  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());

  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature >= 86) return "hot";
  if (temperature >= 66) return "warm";
  return "cold";
};
