import { useEffect, useState } from "react";
import { WeatherSummary } from "./WeatherSummary";
import { WeatherContext } from "./weather-context";
import type { WeatherResponse } from "../../types";

const WeatherComponent = () => {
  const [weather, setWeather] = useState<WeatherResponse>(defaultWeather);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("this is running");
    setIsLoading(true);
    const generateUrl = (state: string) => {
      return `http://api.weatherapi.com/v1/current.json?key=00c200e359e0413493c172048250112&q=${state}&aqi=no`;
    };

    const getStateWeatherAsyncAwaitMethod = async () => {
      try {
        const res = await fetch(generateUrl("Abuja"));
        const data: WeatherResponse = await res.json();
        console.log(data, "data returned from api call");
        setWeather(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        console.log("THIS WILL ALWAYS RUN REGARDLESS OF THE STATUS");
      }
    };
    getStateWeatherAsyncAwaitMethod();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <WeatherContext.Provider value={weather}>
      <WeatherSummary />
    </WeatherContext.Provider>
  );
};

export { WeatherComponent };

const defaultWeather: WeatherResponse = {
  location: {
    name: "",
    region: "",
    country: "",
    lat: 0,
    lon: 0,
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  },
  current: {
    last_updated_epoch: 0,
    last_updated: "",
    temp_c: 0,
    temp_f: 0,
    is_day: 0,
    condition: {
      text: "",
      icon: "",
      code: 0,
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: "",
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm: 0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    windchill_c: 0,
    windchill_f: 0,
    heatindex_c: 0,
    heatindex_f: 0,
    dewpoint_c: 0,
    dewpoint_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0,
    short_rad: 0,
    diff_rad: 0,
    dni: 0,
    gti: 0,
  },
};
