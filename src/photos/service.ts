import { getResourceByPath } from "../shared";

export function getPhotos(albumId?: number) {
  if (albumId !== undefined) {
    return getResourceByPath(`/albums/${albumId}/photos`);
  }

  return getResourceByPath("/photos");
}

export function getPhoto(id: number) {
  return getResourceByPath(`/photos/${id}`);
}
