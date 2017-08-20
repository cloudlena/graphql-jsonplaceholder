import { getResourceByPath } from "../shared";

export function getAlbums(userId?: string) {
    if (userId !== undefined) {
        return getResourceByPath(`/users/${userId}/albums`);
    }
    return getResourceByPath("/albums");
}

export function getAlbum(id: number) {
    return getResourceByPath(`/albums/${id}`);
}
