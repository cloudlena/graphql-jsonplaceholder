import { getResourceByPath } from "../shared/getResourceByPath";

export function getAlbums(userId?: string) {
  if (userId) {
    return getResourceByPath(`/users/${userId}/albums`);
  }
  return getResourceByPath("/albums");
}

export function getAlbum(id: number) {
  return getResourceByPath(`/albums/${id}`);
}
