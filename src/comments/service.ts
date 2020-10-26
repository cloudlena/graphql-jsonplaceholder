import { Comment } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getComments = (postId?: number): Promise<Comment[]> => {
  if (postId) {
    return getResourceByPath(`/posts/${postId}/comments`);
  }
  return getResourceByPath("/comments");
};

export const getComment = (id: number): Promise<Comment> =>
  getResourceByPath(`/comments/${id}`);
