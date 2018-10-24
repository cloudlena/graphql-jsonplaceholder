import { getResourceByPath } from "../shared/getResourceByPath";

export const getAlbums = (userId?: string) => {
  if (userId) {
    return getResourceByPath(`/users/${userId}/albums`);
  }
  return getResourceByPath("/albums");
};

export const getAlbum = (id: number) => getResourceByPath(`/albums/${id}`);
