"use client";
import { useState, FormEvent } from "react";

interface Wind {
  speed: number;
  gusts: number;
  angle: number;
  dir: string;
}

interface Precipitation {
  total: number;
  type: string;
}

interface CurrentWeather {
  icon: string;
  icon_num: number;
  summary: string;
  temperature: number;
  feels_like: number;
  wind_chill: number;
  dew_point: number;
  wind: Wind;
  precipitation: Precipitation;
  cloud_cover: number;
  ozone: number;
  pressure: number;
  uv_index: number;
  humidity: number;
  visibility: number;
}

interface WeatherData {
  lat: string;
  lon: string;
  elevation: number;
  timezone: string;
  units: string;
  current: CurrentWeather;
}

interface Location {
  lat: number;
  lon: number;
}

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);

  const clearData = () => {
    setData(null);
  };

  const getLocation = async (data: any) => {
    const res = await fetch("/api/location", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((resp) => resp.json());

    const latString = res.lat;
    const lonString = res.lon;

    const latMatch = latString.match(/([0-9.]+)/);
    const lonMatch = lonString.match(/([0-9.]+)/);

    if (latMatch && lonMatch) {
      const lat = parseFloat(latMatch[0]);
      const lon = parseFloat(lonMatch[0]);

      // Create an instance of Location interface
      const location: Location = {
        lat,
        lon,
      };

      return location;
    }
  };

  const getWeatherData = async (location: FormEvent) => {
    location.preventDefault();

    const form = location.target as HTMLFormElement;

    const data = {
      name: form.first.value as string,
    };

    const localeData = await getLocation(data);

    const res = await fetch("/api/weather", {
      method: "POST",
      body: JSON.stringify(localeData),
    }).then((resp) => resp.json());

    const weatherData: WeatherData = res as WeatherData;

    setData(weatherData);
  };

  return (
    <main className="mx-0">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
        <div className="flex flex-col items-center px-8 py-12 bg-white rounded-md shadow-lg ">
          <h1 className="font-mono text-xl">Weather.io</h1>
          <p className="pt-3">Click below to Check weather.</p>

          <div className="flex-col items-center justify-center p-4">
            <form
              className="flex flex-col "
              onSubmit={getWeatherData}
              method="post"
            >
              <label className="mb-2 text-center" htmlFor="first">
                Type in a location
              </label>
              <input
                className="px-3 bg-gray-100 border-2 border-gray-500 border-solid shadow-sm rounded-xl"
                type="text"
                id="first"
                name="first"
                required
              />

              <div className="flex flex-row gap-8 pt-3">
                <button
                  className="px-4 py-2 my-3 bg-green-400 rounded-md"
                  type="submit"
                >
                  Get Weather!
                </button>
                <button
                  onClick={() => clearData()}
                  className="px-4 py-2 my-3 bg-red-400 rounded-md"
                >
                  Clear result!
                </button>
              </div>
            </form>
          </div>

          {data != null && (
            <div className="flex-col w-full px-4 py-4 mt-5 overflow-visible text-center bg-gray-200">
              <p>{data.timezone}</p>
              <p>{data.current.summary}</p>
              <p>{data.current.temperature}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
