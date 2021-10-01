import { apiUrl } from "../config.json";
import http from "./httpService";
export function getGenres() {
  return http.get(apiUrl + "/genres");
}
