import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import AlbumType from "../albums/type";

const PhotoType = new GraphQLObjectType({
    fields: () => ({
        album: {
            resolve: (parentValue, args, { loaders }) => loaders.album.load(parentValue.userId),
            type: AlbumType,
        },
        id: { type: GraphQLID },
        thumbnailUrl: { type: GraphQLString },
        title: { type: GraphQLString },
        url: { type: GraphQLString },
    }),
    name: "Photo",
});

export default PhotoType;
