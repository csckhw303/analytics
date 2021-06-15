import { handleResponse, handleError } from "./apiUtils";
const hostUrl = "http://localhost:5000";
const baseUrl = hostUrl + "/2Gbandsinfos";

export function get2GbandsInfo() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
