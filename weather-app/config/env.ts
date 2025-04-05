import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

export const {NODE_ENV, WEATHER_API_KEY, WEATHER_API_NAME, WEATHER_API_STATUS} = process.env;