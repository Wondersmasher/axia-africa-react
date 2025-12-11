import { useContext } from "react";
import { WeatherContext } from "./weather-context";

export const useWeatherContext = () => {
  const weather = useContext(WeatherContext);

  console.log("use Context");
  console.log(weather, "weather from context");

  if (weather === null) {
    throw new Error("weather is undefined, wrap in context");
  }

  return { weather };
};
