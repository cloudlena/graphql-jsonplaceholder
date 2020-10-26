import { Photo } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getPhotos = (albumId?: number): Promise<Photo[]> => {
  if (albumId) {
    return getResourceByPath(`/albums/${albumId}/photos`);
  }
  return getResourceByPath("/photos");
};

export const getPhoto = (id: number): Promise<Photo> =>
  getResourceByPath(`/photos/${id}`);
