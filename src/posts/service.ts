import { getResourceByPath } from "../shared/getResourceByPath";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getPosts = (userId?: number): Promise<Post[]> => {
  if (userId) {
    return getResourceByPath(`/users/${userId}/posts`);
  }
  return getResourceByPath("/posts");
};

export const getPost = (id: number): Promise<Post> =>
  getResourceByPath(`/posts/${id}`);
