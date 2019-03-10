import fetch from "node-fetch";

export const getResourceByPath = async (
  path: string,
  method = "GET",
  body?: object,
): Promise<object | object[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com${path}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.json();
};
