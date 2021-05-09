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
import UserType, { User } from "./users/type";

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    album: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      type: AlbumType,
      resolve: (_, args, { loaders }) => loaders.album.load(args.id),
    },
    albums: {
      type: new GraphQLList(AlbumType),
      resolve: () => getAlbums(),
    },
    comment: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      type: CommentType,
      resolve: (_, args, { loaders }) => loaders.comment.load(args.id),
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve: () => getComments(),
    },
    photo: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      type: PhotoType,
      resolve: (_, args, { loaders }) => loaders.photo.load(args.id),
    },
    photos: {
      type: new GraphQLList(PhotoType),
      resolve: () => getPhotos(),
    },
    post: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      type: PostType,
      resolve: (_, args, { loaders }) => loaders.post.load(args.id),
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve: () => getPosts(),
    },
    todo: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      type: TodoType,
      resolve: (_, args, { loaders }) => loaders.todo.load(args.id),
    },
    todos: {
      type: new GraphQLList(TodoType),
      resolve: () => getTodos(),
    },
    user: {
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      type: UserType,
      resolve: (_, args, { loaders }) => loaders.user.load(args.id),
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: () => getUsers(),
    },
  }),
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
      type: UserType,
      resolve: (_, args) => createUser(args as User),
    },
    deleteUser: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      type: UserType,
      resolve: (_, args) => deleteUser(args.id),
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
      type: UserType,
      resolve: (_, args) => updateUser(args.id, args),
    },
  },
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
