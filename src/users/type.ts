import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import AlbumType from "../albums/type";
import PostType from "../posts/type";
import TodoType from "../todos/type";

const UserAddressGeoType = new GraphQLObjectType({
    fields: {
        lat: { type: GraphQLString },
        lng: { type: GraphQLString },
    },
    name: "UserAddressGeo",
});

const UserAddressType = new GraphQLObjectType({
    fields: {
        city: { type: GraphQLString },
        geo: { type: UserAddressGeoType },
        street: { type: GraphQLString },
        suite: { type: GraphQLString },
        zipcode: { type: GraphQLString },
    },
    name: "UserAddress",
});

const UserCompanyType = new GraphQLObjectType({
    fields: {
        bs: { type: GraphQLString },
        catchPhrase: { type: GraphQLString },
        name: { type: GraphQLString },
    },
    name: "UserCompany",
});

const UserType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        address: { type: UserAddressType },
        albums: {
            resolve: (parentValue, args, { loaders }) => loaders.albums.load(parentValue.id),
            type: new GraphQLList(AlbumType),
        },
        company: { type: UserCompanyType },
        email: { type: GraphQLString },
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        phone: { type: GraphQLString },
        posts: {
            resolve: (parentValue, args, { loaders }) => loaders.posts.load(parentValue.id),
            type: new GraphQLList(PostType),
        },
        todos: {
            resolve: (parentValue, args, { loaders }) => loaders.totos.load(parentValue.id),
            type: new GraphQLList(TodoType),
        },
        username: { type: GraphQLString },
        website: { type: GraphQLString },
    }),
    name: "User",
});

export default UserType;
