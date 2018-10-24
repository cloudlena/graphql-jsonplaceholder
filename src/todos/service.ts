import { getResourceByPath } from "../shared/getResourceByPath";

export const getTodos = (userId?: number) => {
  if (userId) {
    return getResourceByPath(`/users/${userId}/todos`);
  }
  return getResourceByPath("/todos");
};

export const getTodo = (id: number) => getResourceByPath(`/todos/${id}`);
