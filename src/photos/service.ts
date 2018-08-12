import { getResourceByPath } from "../shared/getResourceByPath";

export function getPhotos(albumId?: number) {
  if (albumId) {
    return getResourceByPath(`/albums/${albumId}/photos`);
  }
  return getResourceByPath("/photos");
}

export function getPhoto(id: number) {
  return getResourceByPath(`/photos/${id}`);
}
