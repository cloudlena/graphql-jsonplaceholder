import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import AlbumType from "../albums/type";
import { Loaders } from "../loaders";

export interface Photo {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: string;
}

const PhotoType: GraphQLObjectType<Photo, { loaders: Loaders }> =
  new GraphQLObjectType({
    name: "Photo",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLString },
      url: { type: GraphQLString },
      thumbnailUrl: { type: GraphQLString },
      album: {
        type: AlbumType,
        resolve: (parentValue, args, { loaders }) =>
          loaders.album.load(parentValue.albumId),
      },
    }),
  });

export default PhotoType;
