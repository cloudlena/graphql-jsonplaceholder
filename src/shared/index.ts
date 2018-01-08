import fetch from "node-fetch";

export function getResourceByPath(path: string, method = "GET", body?: any) {
  return fetch(`https://jsonplaceholder.typicode.com${path}`, {
    body: JSON.stringify(body),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method,
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
