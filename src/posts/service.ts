import { getResourceByPath } from "../shared";

export function getPosts(userId?: number) {
    if (userId !== undefined) {
        return getResourceByPath(`/users/${userId}/posts`);
    }

    return getResourceByPath("/posts");
}

export function getPost(id: number) {
    return getResourceByPath(`/posts/${id}`);
}
