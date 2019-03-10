import { getResourceByPath } from "../shared/getResourceByPath";

interface Album {
  userId: number;
  id: number;
  title: string;
}

export const getAlbums = (userId?: string): Promise<Album[]> => {
  if (userId) {
    return getResourceByPath(`/users/${userId}/albums`);
  }
  return getResourceByPath("/albums");
};

export const getAlbum = (id: number): Promise<Album> =>
  getResourceByPath(`/albums/${id}`);
