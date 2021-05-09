import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import PhotoType from "../photos/type";
import UserType from "../users/type";
import { Loaders } from "../loaders";

export interface Album {
  id: string;
  title: string;
  userId: string;
}

const AlbumType: GraphQLObjectType<Album, { loaders: Loaders }> =
  new GraphQLObjectType({
    name: "Album",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLString },
      photos: {
        type: new GraphQLList(PhotoType),
        resolve: (parentValue, args, { loaders }) =>
          loaders.photos.load(parentValue.id),
      },
      user: {
        type: UserType,
        resolve: (parentValue, args, { loaders }) =>
          loaders.user.load(parentValue.userId),
      },
    }),
  });

export default AlbumType;
