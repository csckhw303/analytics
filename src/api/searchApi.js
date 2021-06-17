import { handleResponse, handleError } from "./apiUtils";
const hostUrl = "http://localhost:5000";
const baseUrl = hostUrl + "/search";

export function getSearch(criterias) {
  return fetch(baseUrl, {
    headers: {
      "Content-type": "application/json",
      //"Access-Control-Allow-Origin": "*",
      "Referrer-Policy": "origin-when-cross-origin",
    },
    method: "POST",
    //mode: "no-cors",
    body: JSON.stringify(criterias),
  })
    .then(handleResponse)
    .catch(handleError);
}
