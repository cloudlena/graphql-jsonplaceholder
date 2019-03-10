import { getResourceByPath } from "../shared/getResourceByPath";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const getPhotos = (albumId?: number): Promise<Photo[]> => {
  if (albumId) {
    return getResourceByPath(`/albums/${albumId}/photos`);
  }
  return getResourceByPath("/photos");
};

export const getPhoto = (id: number): Promise<Photo> =>
  getResourceByPath(`/photos/${id}`);
