import fetch from "node-fetch";

export function getResourceByPath(path: string) {
    return fetch(`https://jsonplaceholder.typicode.com${path}`)
        .then((res) => res.json());
}
