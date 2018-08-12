import { getResourceByPath } from "../shared/getResourceByPath";

export function getTodos(userId?: number) {
  if (userId) {
    return getResourceByPath(`/users/${userId}/todos`);
  }
  return getResourceByPath("/todos");
}

export function getTodo(id: number) {
  return getResourceByPath(`/todos/${id}`);
}
