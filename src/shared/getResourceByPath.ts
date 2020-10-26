import fetch from "node-fetch";

export const getResourceByPath = async (
  path: string,
  method = "GET",
  body?: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
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
