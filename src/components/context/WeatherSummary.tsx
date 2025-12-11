import { WeatherBody } from "./WeatherBody";
import { WeatherHeader } from "./WeatherHeader";
import { useWeatherContext } from "./useWeatherContext";

// type WeatherSumaryType = {
//   weather: WeatherResponse;
// };
const WeatherSummary = () =>
  // { weather }: WeatherSumaryType
  {
    const { weather } = useWeatherContext();
    console.log(weather, "weather from summary");
    return (
      <div>
        <WeatherHeader
        // weather={weather}
        />
        <WeatherBody
        // weather={weather}
        />
      </div>
    );
  };

export { WeatherSummary };
