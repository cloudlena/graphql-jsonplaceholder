import { getResourceByPath } from "../shared/getResourceByPath";

export function getComments(postId?: number) {
  if (postId) {
    return getResourceByPath(`/posts/${postId}/comments`);
  }
  return getResourceByPath("/comments");
}

export function getComment(id: number) {
  return getResourceByPath(`/comments/${id}`);
}
