import { getResourceByPath } from "../shared";

export function getTodos(userId?: number) {
  if (userId !== undefined) {
    return getResourceByPath(`/users/${userId}/todos`);
  }

  return getResourceByPath("/todos");
}

export function getTodo(id: number) {
  return getResourceByPath(`/todos/${id}`);
}
