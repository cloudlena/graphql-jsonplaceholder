import * as DataLoader from "dataloader";
import { getAlbum, getAlbums } from "./albums/service";
import { getComment, getComments } from "./comments/service";
import { getPhoto, getPhotos } from "./photos/service";
import { getPost, getPosts } from "./posts/service";
import { getTodo, getTodos } from "./todos/service";
import { getUser } from "./users/service";

const loaders = {
  album: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getAlbum(k as string)))
  ),
  albums: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getAlbums(k as string)))
  ),
  comment: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getComment(k as string)))
  ),
  comments: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getComments(k as string)))
  ),
  photo: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getPhoto(k as string)))
  ),
  photos: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getPhotos(k as string)))
  ),
  post: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getPost(k as string)))
  ),
  posts: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getPosts(k as string)))
  ),
  todo: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getTodo(k as string)))
  ),
  todos: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getTodos(k as string)))
  ),
  user: new DataLoader((keys) =>
    Promise.all(keys.map((k) => getUser(k as string)))
  ),
};

export type Loaders = typeof loaders;

export default loaders;
