import { handleResponse, handleError } from "./apiUtils";
const hostUrl = "http://localhost:5000";
const baseUrl = hostUrl + "/chipsetinfos";

export function getchipsetInfo() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
