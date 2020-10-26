import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
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
import { createUser, deleteUser, getUsers, updateUser } from "./users/service";
import UserType from "./users/type";

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    album: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, args, { loaders }) => loaders.album.load(args.id),
      type: AlbumType,
    },
    albums: {
      resolve: () => getAlbums(),
      type: new GraphQLList(AlbumType),
    },
    comment: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, args, { loaders }) => loaders.comment.load(args.id),
      type: CommentType,
    },
    comments: {
      resolve: () => getComments(),
      type: new GraphQLList(CommentType),
    },
    photo: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, args, { loaders }) => loaders.photo.load(args.id),
      type: PhotoType,
    },
    photos: {
      resolve: () => getPhotos(),
      type: new GraphQLList(PhotoType),
    },
    post: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, args, { loaders }) => loaders.post.load(args.id),
      type: PostType,
    },
    posts: {
      resolve: () => getPosts(),
      type: new GraphQLList(PostType),
    },
    todo: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, args, { loaders }) => loaders.todo.load(args.id),
      type: TodoType,
    },
    todos: {
      resolve: () => getTodos(),
      type: new GraphQLList(TodoType),
    },
    user: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (_, args, { loaders }) => loaders.user.load(args.id),
      type: UserType,
    },
    users: {
      resolve: () => getUsers(),
      type: new GraphQLList(UserType),
    },
  },
});

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      args: {
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
      },
      resolve: (_, args) => createUser(args),
      type: UserType,
    },
    deleteUser: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, args) => deleteUser(args.id),
      type: UserType,
    },
    updateUser: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
      },
      resolve: (_, args) => updateUser(args.id, args),
      type: UserType,
    },
  },
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
