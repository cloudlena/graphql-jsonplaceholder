import { getResourceByPath } from "../shared/getResourceByPath";

export const getPosts = (userId?: number) => {
  if (userId) {
    return getResourceByPath(`/users/${userId}/posts`);
  }
  return getResourceByPath("/posts");
};

export const getPost = (id: number) => getResourceByPath(`/posts/${id}`);
