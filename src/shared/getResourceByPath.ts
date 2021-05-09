import fetch, { Response } from "node-fetch";

export const getResourceByPath = async (
  path: string,
  method = "GET",
  body?: unknown
): Promise<Response> =>
  fetch(`https://jsonplaceholder.typicode.com${path}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
