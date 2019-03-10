import { getResourceByPath } from "../shared/getResourceByPath";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getComments = (postId?: number): Promise<Comment[]> => {
  if (postId) {
    return getResourceByPath(`/posts/${postId}/comments`);
  }
  return getResourceByPath("/comments");
};

export const getComment = (id: number): Promise<Comment> =>
  getResourceByPath(`/comments/${id}`);
