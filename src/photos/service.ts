import { getResourceByPath } from "../shared/getResourceByPath";

export const getPhotos = (albumId?: number) => {
  if (albumId) {
    return getResourceByPath(`/albums/${albumId}/photos`);
  }
  return getResourceByPath("/photos");
};

export const getPhoto = (id: number) => getResourceByPath(`/photos/${id}`);
