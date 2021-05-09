import { User } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getUsers = async (): Promise<User[]> => {
  const res = await getResourceByPath("/users");
  const users = (await res.json()) as User[];
  return users;
};

export const getUser = async (id: string): Promise<User> => {
  const res = await getResourceByPath(`/users/${id}`);
  const user = (await res.json()) as User;
  return user;
};

export const createUser = async (newUser: User): Promise<void> => {
  await getResourceByPath("/users", "POST", newUser);
};

export const updateUser = async (
  id: string,
  newFields: Partial<User>
): Promise<void> => {
  await getResourceByPath(`/users/${id}`, "PATCH", newFields);
};

export const deleteUser = async (id: string): Promise<void> => {
  await getResourceByPath(`/users/${id}`, "DELETE");
};
