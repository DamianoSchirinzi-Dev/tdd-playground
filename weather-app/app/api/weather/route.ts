import { NextResponse } from "next/server";
const axios = require("axios");

export async function POST(request: Request) {
  const location = await request.json();
  console.log(location);

  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/current",
    params: {
      lat: location.lat,
      lon: location.lon,
      timezone: "auto",
      language: "en",
      units: "auto",
    },
    headers: {
      "X-RapidAPI-Key": "aa43411213mshbb5c253988d5800p1d3caajsn10a77c9f09a0",
      "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const responseBody = JSON.stringify(response.data);

    return new Response(responseBody, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
  }
}
