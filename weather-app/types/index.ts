/**
 * Geo Location API Response
 */
export interface GeoJSONResponse {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
  local_name?: Record<string, string>;
}