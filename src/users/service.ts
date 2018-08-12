import { getResourceByPath } from "../shared/getResourceByPath";

export function getUsers() {
  return getResourceByPath("/users");
}

export function getUser(id: number) {
  return getResourceByPath(`/users/${id}`);
}

export function createUser(newUser: any) {
  return getResourceByPath("/users", "POST", newUser);
}

export function updateUser(id: number, newFields: any) {
  return getResourceByPath(`/users/${id}`, "PATCH", newFields);
}

export function deleteUser(id: number) {
  return getResourceByPath(`/users/${id}`, "DELETE");
}
