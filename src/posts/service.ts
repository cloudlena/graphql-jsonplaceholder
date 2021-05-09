import { Response } from "node-fetch";
import { Post } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getPosts = async (userId?: string): Promise<Post[]> => {
  let res: Response;
  if (userId) {
    res = await getResourceByPath(`/users/${userId}/posts`);
  } else {
    res = await getResourceByPath("/posts");
  }

  const posts = (await res.json()) as Post[];
  return posts;
};

export const getPost = async (id: string): Promise<Post> => {
  const res = await getResourceByPath(`/posts/${id}`);
  const post = (await res.json()) as Post;
  return post;
};
