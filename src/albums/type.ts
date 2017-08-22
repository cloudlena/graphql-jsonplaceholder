import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import PhotoType from "../photos/type";
import UserType from "../users/type";

const AlbumType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        id: { type: GraphQLID },
        photos: {
            resolve: (parentValue, args, { loaders }) => loaders.photos.load(parentValue.id),
            type: new GraphQLList(PhotoType),
        },
        title: { type: GraphQLString },
        user: {
            resolve: (parentValue, args, { loaders }) => loaders.user.load(parentValue.userId),
            type: UserType,
        },
    }),
    name: "Album",
});

export default AlbumType;
