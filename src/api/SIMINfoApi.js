import { handleResponse, handleError } from "./apiUtils";
const hostUrl = "http://localhost:5000";
const baseUrl = hostUrl + "/SIMinfos";

export function getSIMInfo() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
