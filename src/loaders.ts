import * as DataLoader from "dataloader";

import { getAlbum, getAlbums } from "./albums/service";
import { getComment, getComments } from "./comments/service";
import { getPhoto, getPhotos } from "./photos/service";
import { getPost, getPosts } from "./posts/service";
import { getTodo, getTodos } from "./todos/service";
import { getUser } from "./users/service";

const loaders = {
    album: new DataLoader((keys) => Promise.all(keys.map(getAlbum))),
    albums: new DataLoader((keys) => Promise.all(keys.map(getAlbums))),
    comment: new DataLoader((keys) => Promise.all(keys.map(getComment))),
    comments: new DataLoader((keys) => Promise.all(keys.map(getComments))),
    photo: new DataLoader((keys) => Promise.all(keys.map(getPhoto))),
    photos: new DataLoader((keys) => Promise.all(keys.map(getPhotos))),
    post: new DataLoader((keys) => Promise.all(keys.map(getPost))),
    posts: new DataLoader((keys) => Promise.all(keys.map(getPosts))),
    todo: new DataLoader((keys) => Promise.all(keys.map(getTodo))),
    todos: new DataLoader((keys) => Promise.all(keys.map(getTodos))),
    user: new DataLoader((keys) => Promise.all(keys.map(getUser))),
};

export default loaders;
