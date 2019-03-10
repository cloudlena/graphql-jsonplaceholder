import { getResourceByPath } from "../shared/getResourceByPath";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getUsers = (): Promise<User[]> => getResourceByPath("/users");

export const getUser = (id: number): Promise<User> =>
  getResourceByPath(`/users/${id}`);

export const createUser = (newUser: User): Promise<void> =>
  getResourceByPath("/users", "POST", newUser);

export const updateUser = (
  id: number,
  newFields: Partial<User>,
): Promise<void> => getResourceByPath(`/users/${id}`, "PATCH", newFields);

export const deleteUser = (id: number): Promise<void> =>
  getResourceByPath(`/users/${id}`, "DELETE");
