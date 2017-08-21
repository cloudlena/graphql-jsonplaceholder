import {
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
} from "graphql";

import { getAlbums } from "./albums/service";
import AlbumType from "./albums/type";
import { getComments } from "./comments/service";
import CommentType from "./comments/type";
import { getPhotos } from "./photos/service";
import PhotoType from "./photos/type";
import { getPosts } from "./posts/service";
import PostType from "./posts/type";
import { getTodos } from "./todos/service";
import TodoType from "./todos/type";
import { getUsers } from "./users/service";
import UserType from "./users/type";

const QueryType = new GraphQLObjectType({
    fields: {
        album: {
            args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve: (parentValue, args, { loaders }) => loaders.album.load(args.id),
            type: AlbumType,
        },
        albums: {
            resolve: (parentValue) => getAlbums(),
            type: new GraphQLList(AlbumType),
        },
        comment: {
            args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve: (parentValue, args, { loaders }) => loaders.comment.load(args.id),
            type: CommentType,
        },
        comments: {
            resolve: () => getComments(),
            type: new GraphQLList(CommentType),
        },
        photo: {
            args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve: (parentValue, args, { loaders }) => loaders.photo.load(args.id),
            type: PhotoType,
        },
        photos: {
            resolve: () => getPhotos(),
            type: new GraphQLList(PhotoType),
        },
        post: {
            args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve: (parentValue, args, { loaders }) => loaders.post.load(args.id),
            type: PostType,
        },
        posts: {
            resolve: () => getPosts(),
            type: new GraphQLList(PostType),
        },
        todo: {
            args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve: (parentValue, args, { loaders }) => loaders.todo.load(args.id),
            type: TodoType,
        },
        todos: {
            resolve: () => getTodos(),
            type: new GraphQLList(TodoType),
        },
        user: {
            args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve: (parentValue, args, { loaders }) => loaders.user.load(args.id),
            type: UserType,
        },
        users: {
            resolve: () => getUsers(),
            type: new GraphQLList(UserType),
        },
    },
    name: "Query",
});

const schema = new GraphQLSchema({ query: QueryType });

export default schema;
