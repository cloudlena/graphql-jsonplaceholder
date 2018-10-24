import { getResourceByPath } from "../shared/getResourceByPath";

export const getComments = (postId?: number) => {
  if (postId) {
    return getResourceByPath(`/posts/${postId}/comments`);
  }
  return getResourceByPath("/comments");
};

export const getComment = (id: number) => getResourceByPath(`/comments/${id}`);
