import {WEATHER_API_KEY} from "@/config/env";

export const API_CONFIG = {
    BASE_URL: "https://api.openweathermap.org/data/2.5",
    GEO: "https://api.openweathermap.org/geo/1.0",
    DEFAULT_PARAMS: {
        units: "metric",
        appid: WEATHER_API_KEY,
    } as const,
} as const;
