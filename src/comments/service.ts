import { getResourceByPath } from "../shared";

export function getComments(postId?: number) {
    if (postId !== undefined) {
        return getResourceByPath(`/posts/${postId}/comments`);
    }

    return getResourceByPath("/comments");
}

export function getComment(id: number) {
    return getResourceByPath(`/comments/${id}`);
}
