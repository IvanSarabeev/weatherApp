import {useQuery} from "@tanstack/react-query";
import {weatherApi} from "@/api/weather";

export const WEATHER_KEYS = {
    search: (query: string) => ["location-search", query] as const,
} as const;

export function useLocationSearch(query: string) {
    return useQuery({
        queryKey: WEATHER_KEYS.search(query),
        queryFn: () => weatherApi.searchWeatherLocation(query),
        enabled: query.length >= 3,
    });
}