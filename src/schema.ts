import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
} from "graphql";

import { AlbumType, getAlbum, getAlbums } from "./albums";
import { CommentType, getComment, getComments } from "./comments";
import { getPhoto, getPhotos, PhotoType } from "./photos";
import { getPost, getPosts, PostType } from "./posts";
import { getTodo, getTodos, TodoType } from "./todos";
import { getUser, getUsers, UserType } from "./users";

const RootQuery = new GraphQLObjectType({
    fields: {
        album: {
            args: { id: { type: GraphQLInt } },
            resolve: (parentValue, args) => getAlbum(args.id),
            type: AlbumType,
        },
        albums: {
            resolve: () => getAlbums(),
            type: new GraphQLList(AlbumType),
        },
        comment: {
            args: { id: { type: GraphQLInt } },
            resolve: (parentValue, args) => getComment(args.id),
            type: CommentType,
        },
        comments: {
            resolve: () => getComments(),
            type: new GraphQLList(CommentType),
        },
        photo: {
            args: { id: { type: GraphQLInt } },
            resolve: (parentValue, args) => getPhoto(args.id),
            type: PhotoType,
        },
        photos: {
            resolve: () => getPhotos(),
            type: new GraphQLList(PhotoType),
        },
        post: {
            args: { id: { type: GraphQLInt } },
            resolve: (parentValue, args) => getPost(args.id),
            type: PostType,
        },
        posts: {
            resolve: () => getPosts(),
            type: new GraphQLList(PostType),
        },
        todo: {
            args: { id: { type: GraphQLInt } },
            resolve: (parentValue, args) => getTodo(args.id),
            type: TodoType,
        },
        todos: {
            resolve: () => getTodos(),
            type: new GraphQLList(TodoType),
        },
        user: {
            args: { id: { type: GraphQLInt } },
            resolve: (parentValue, args) => getUser(args.id),
            type: UserType,
        },
        users: {
            resolve: () => getUsers(),
            type: new GraphQLList(UserType),
        },
    },
    name: "RootQuery",
});

export const schema = new GraphQLSchema({ query: RootQuery });
