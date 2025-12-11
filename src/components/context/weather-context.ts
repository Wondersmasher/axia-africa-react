import { createContext } from "react";
import { type WeatherResponse } from "../../types";

export const WeatherContext = createContext<WeatherResponse | null>(null);

// export const useWeatherContext = () => {
//   const weather = useContext(WeatherContext);

//   if (weather === undefined) {
//     throw new Error("You must use WeatherContext");
//   }

//   return { weather };
// };
