export const weatherOptions = [
  {
    condition: "Clear",
    day: true,
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    condition: "Clear",
    day: false,
    url: new URL("../assets/night/clear.png", import.meta.url).href,
  },
  {
    condition: "Clouds",
    day: true,
    url: new URL("../assets/day/cloudy.png", import.meta.url).href,
  },
  {
    condition: "Clouds",
    day: false,
    url: new URL("../assets/night/clouds.png", import.meta.url).href,
  },
  {
    condition: "Rain",
    day: true,
    url: new URL("../assets/day/rain.png", import.meta.url).href,
  },
  {
    condition: "Rain",
    day: false,
    url: new URL("../assets/night/rain.png", import.meta.url).href,
  },
  {
    condition: "Snow",
    day: true,
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    condition: "Snow",
    day: false,
    url: new URL("../assets/night/snow.png", import.meta.url).href,
  },
];

// Default fallback images
export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default.png", import.meta.url).href,
  },
};

// Your OpenWeather API key
export const APIkey = "610ee56d12a094373a1043bb40f39c41";

// Default coordinates (fallback if geolocation fails)
export const defaultCoordinates = {
  latitude: 35.661368,
  longitude: 139.737601,
};
