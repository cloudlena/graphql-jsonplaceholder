import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { AlbumType, getAlbum } from "../albums";
import { getResourceByPath } from "../shared";

export function getPhotos() {
    return getResourceByPath("/photos");
}

export function getPhoto(id: number) {
    return getResourceByPath(`/photos/${id}`);
}

export const PhotoType = new GraphQLObjectType({
    fields: () => ({
        album: {
            resolve: (parentValue) => getAlbum(parentValue.userId),
            type: AlbumType,
        },
        id: { type: GraphQLInt },
        thumbnailUrl: { type: GraphQLString },
        title: { type: GraphQLString },
        url: { type: GraphQLString },
    }),
    name: "Photo",
});
