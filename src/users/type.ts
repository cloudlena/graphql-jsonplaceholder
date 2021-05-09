import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import AlbumType from "../albums/type";
import PostType from "../posts/type";
import TodoType from "../todos/type";
import { Loaders } from "../loaders";

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
    zipcode: string;
    street: string;
    suite: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const GeoCoordinatesType = new GraphQLObjectType({
  name: "GeoCoordinates",
  fields: {
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  },
});

const AddressType = new GraphQLObjectType({
  name: "Address",
  fields: {
    city: { type: GraphQLString },
    zipcode: { type: GraphQLString },
    street: { type: GraphQLString },
    suite: { type: GraphQLString },
    geo: { type: GeoCoordinatesType },
  },
});

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: {
    name: { type: GraphQLString },
    catchPhrase: { type: GraphQLString },
    bs: { type: GraphQLString },
  },
});

const UserType: GraphQLObjectType<User, { loaders: Loaders }> =
  new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
      username: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      website: { type: GraphQLString },
      address: { type: AddressType },
      company: { type: CompanyType },
      albums: {
        type: new GraphQLList(AlbumType),
        resolve: (parentValue, args, { loaders }) =>
          loaders.albums.load(parentValue.id),
      },
      posts: {
        type: new GraphQLList(PostType),
        resolve: (parentValue, args, { loaders }) =>
          loaders.posts.load(parentValue.id),
      },
      todos: {
        type: new GraphQLList(TodoType),
        resolve: (parentValue, args, { loaders }) =>
          loaders.todos.load(parentValue.id),
      },
    }),
  });

export default UserType;
