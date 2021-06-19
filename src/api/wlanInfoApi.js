import { handleResponse, handleError } from "./apiUtils";
const hostUrl = "http://localhost:5000";
const baseUrl = hostUrl + "/wlaninfos";

export function getwlanInfo() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
