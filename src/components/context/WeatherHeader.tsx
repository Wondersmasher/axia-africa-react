// import type { WeatherResponse } from "./WeatherSummary";

import { useWeatherContext } from "./useWeatherContext";

// type WeatherHeaderType = {
//   weather: WeatherResponse;
// };

const WeatherHeader = () =>
  // { weather }: WeatherHeaderType
  {
    const { weather } = useWeatherContext();

    return (
      <div>
        <p>This is the demo header</p>
        <p>
          Weather country from the header is:
          {weather?.location.country}
        </p>
      </div>
    );
  };

export { WeatherHeader };
