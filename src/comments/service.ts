import { Response } from "node-fetch";
import { Comment } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getComments = async (postId?: string): Promise<Comment[]> => {
  let res: Response;
  if (postId) {
    res = await getResourceByPath(`/posts/${postId}/comments`);
  } else {
    res = await getResourceByPath("/comments");
  }

  const comments = (await res.json()) as Comment[];
  return comments;
};

export const getComment = async (id: string): Promise<Comment> => {
  const res = await getResourceByPath(`/comments/${id}`);
  const comment = (await res.json()) as Comment;
  return comment;
};
