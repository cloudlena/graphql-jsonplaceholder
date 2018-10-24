import { getResourceByPath } from "../shared/getResourceByPath";

export const getUsers = () => getResourceByPath("/users");

export const getUser = (id: number) => getResourceByPath(`/users/${id}`);

export const createUser = (newUser: any) =>
  getResourceByPath("/users", "POST", newUser);

export const updateUser = (id: number, newFields: any) =>
  getResourceByPath(`/users/${id}`, "PATCH", newFields);

export const deleteUser = (id: number) =>
  getResourceByPath(`/users/${id}`, "DELETE");
