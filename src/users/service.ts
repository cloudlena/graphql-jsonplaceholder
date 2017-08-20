import { getResourceByPath } from "../shared";

export function getUsers() {
    return getResourceByPath("/users");
}

export function getUser(id: number) {
    return getResourceByPath(`/users/${id}`);
}
