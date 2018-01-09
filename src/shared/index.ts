import fetch from "node-fetch";

export async function getResourceByPath(
  path: string,
  method = "GET",
  body?: any,
) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com${path}`, {
      body: JSON.stringify(body),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method,
    });
    return res.json();
  } catch (err) {
    console.error(err);
  }
}
