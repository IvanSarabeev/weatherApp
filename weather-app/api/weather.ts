import {WEATHER_API_KEY} from "@/config/env";
import {API_CONFIG} from "@/config";
import {GeoJSONResponse} from "@/types";

class Weather {

    /**
     * Re-usable Endpoint Initialization
     *
     * @param {string} endpoint - Endpoint / url
     * @param {Record<string, string | number>} params - Different parameters
     * @return {string} - return endpoint with combined search params
     * @private
     */
    private createUrl(endpoint: string, params: Record<string, string | number>): string {
        const searchParams = new URLSearchParams({
            appid: WEATHER_API_KEY ?? '',
            ...params,
        });

        return `${endpoint}?${searchParams.toString()}`;
    };

    /**
     * Fetch Weather API endpoints
     *
     * @param {string} url - Provided endpoint / url
     * @private
     */
    private async fetchData<T>(url: string): Promise<T> {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Weather API Error: ${response.statusText}`);
        }

        return await response.json();
    }

    /**
     * Search through Weather Locations
     *
     * @param {string} query - Search query params
     */
    public async searchWeatherLocation(query: string): Promise<GeoJSONResponse | undefined> {
        const queryLimit = 5;

        const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
            q: query,
            limit: queryLimit,
        });

        return this.fetchData<GeoJSONResponse>(url);
    };
}

export const weatherApi = new Weather();