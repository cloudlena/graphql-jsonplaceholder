import { Response } from "node-fetch";
import { Photo } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getPhotos = async (albumId?: string): Promise<Photo[]> => {
  let res: Response;
  if (albumId) {
    res = await getResourceByPath(`/albums/${albumId}/photos`);
  } else {
    res = await getResourceByPath("/photos");
  }

  const photos = (await res.json()) as Photo[];
  return photos;
};

export const getPhoto = async (id: string): Promise<Photo> => {
  const res = await getResourceByPath(`/photos/${id}`);
  const photo = (await res.json()) as Photo;
  return photo;
};
