import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { PhotoType } from "../photos";
import { getResourceByPath } from "../shared";
import { getUser, UserType } from "../users";

export function getAlbums() {
    return getResourceByPath("/albums");
}

export function getAlbum(id: number) {
    return getResourceByPath(`/albums/${id}`);
}

export function getAlbumPhotos(id: number) {
    return getResourceByPath(`/albums/${id}/photos`);
}

export const AlbumType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        id: { type: GraphQLInt },
        photos: {
            resolve: (parentValue) => getAlbumPhotos(parentValue.id),
            type: new GraphQLList(PhotoType),
        },
        title: { type: GraphQLString },
        user: {
            resolve: (parentValue) => getUser(parentValue.userId),
            type: UserType,
        },
    }),
    name: "Album",
});
