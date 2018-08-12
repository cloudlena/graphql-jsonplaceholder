import { getResourceByPath } from "../shared/getResourceByPath";

export function getPosts(userId?: number) {
  if (userId) {
    return getResourceByPath(`/users/${userId}/posts`);
  }
  return getResourceByPath("/posts");
}

export function getPost(id: number) {
  return getResourceByPath(`/posts/${id}`);
}
