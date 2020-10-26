import { Todo } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getTodos = (userId?: number): Promise<Todo[]> => {
  if (userId) {
    return getResourceByPath(`/users/${userId}/todos`);
  }
  return getResourceByPath("/todos");
};

export const getTodo = (id: number): Promise<Todo> =>
  getResourceByPath(`/todos/${id}`);
