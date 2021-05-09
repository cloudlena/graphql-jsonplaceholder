import { Response } from "node-fetch";
import { Todo } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getTodos = async (userId?: string): Promise<Todo[]> => {
  let res: Response;
  if (userId) {
    res = await getResourceByPath(`/users/${userId}/todos`);
  } else {
    res = await getResourceByPath("/todos");
  }

  const todos = (await res.json()) as Todo[];
  return todos;
};

export const getTodo = async (id: string): Promise<Todo> => {
  const res = await getResourceByPath(`/todos/${id}`);
  const todo = (await res.json()) as Todo;
  return todo;
};
