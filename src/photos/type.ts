import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import AlbumType from "../albums/type";

export interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
}

const PhotoType = new GraphQLObjectType({
  name: "Photo",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    thumbnailUrl: { type: GraphQLString },
    album: {
      resolve: (parentValue, args, { loaders }) =>
        loaders.album.load(parentValue.userId),
      type: AlbumType,
    },
  }),
});

export default PhotoType;
