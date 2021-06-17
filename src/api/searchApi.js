import { handleResponse, handleError } from "./apiUtils";
const hostUrl = "http://localhost:5000";
const baseUrl = hostUrl + "/search";

export function getSearch(criterias) {
  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(criterias),
  })
    .then(handleResponse)
    .catch(handleError);
}
