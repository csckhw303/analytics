import { handleResponse, handleError } from "./apiUtils";
const hostUrl = "http://localhost:5000";
const baseUrl = hostUrl + "/announcedinfos";

export function getAnnouncedInfo() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
