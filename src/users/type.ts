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

const GeoCoordinatesType = new GraphQLObjectType({
  fields: {
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  },
  name: "GeoCoordinates",
});

const AddressType = new GraphQLObjectType({
  fields: {
    city: { type: GraphQLString },
    geo: { type: GeoCoordinatesType },
    street: { type: GraphQLString },
    suite: { type: GraphQLString },
    zipcode: { type: GraphQLString },
  },
  name: "Address",
});

const CompanyType = new GraphQLObjectType({
  fields: {
    bs: { type: GraphQLString },
    catchPhrase: { type: GraphQLString },
    name: { type: GraphQLString },
  },
  name: "Company",
});

const UserType: GraphQLObjectType = new GraphQLObjectType({
  fields: () => ({
    address: { type: AddressType },
    albums: {
      resolve: (parentValue, args, { loaders }) =>
        loaders.albums.load(parentValue.id),
      type: new GraphQLList(AlbumType),
    },
    company: { type: CompanyType },
    email: { type: GraphQLString },
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    phone: { type: GraphQLString },
    posts: {
      resolve: (parentValue, args, { loaders }) =>
        loaders.posts.load(parentValue.id),
      type: new GraphQLList(PostType),
    },
    todos: {
      resolve: (parentValue, args, { loaders }) =>
        loaders.totos.load(parentValue.id),
      type: new GraphQLList(TodoType),
    },
    username: { type: GraphQLString },
    website: { type: GraphQLString },
  }),
  name: "User",
});

export default UserType;
