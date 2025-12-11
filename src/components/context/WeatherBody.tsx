// import type { WeatherResponse } from "./WeatherSummary";

import { useWeatherContext } from "./useWeatherContext";

// type WeatherHeaderType = {
//   weather: WeatherResponse;
// };

const WeatherBody = () =>
  // { weather }: WeatherHeaderType
  {
    const { weather } = useWeatherContext();

    return (
      <div>
        <p>This is the body</p>
        <p>Actual Weather is: {weather?.current.temp_c} C</p>
        <p>But it feels like: {weather?.current.feelslike_c} C</p>
      </div>
    );
  };

export { WeatherBody };
