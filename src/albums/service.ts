import { Response } from "node-fetch";
import { Album } from "./type";
import { getResourceByPath } from "../shared/getResourceByPath";

export const getAlbums = async (userId?: string): Promise<Album[]> => {
  let res: Response;
  if (userId) {
    res = await getResourceByPath(`/users/${userId}/albums`);
  } else {
    res = await getResourceByPath("/albums");
  }

  const albums = (await res.json()) as Album[];
  return albums;
};

export const getAlbum = async (id: string): Promise<Album> => {
  const res = await getResourceByPath(`/albums/${id}`);
  const album = (await res.json()) as Album;
  return album;
};
