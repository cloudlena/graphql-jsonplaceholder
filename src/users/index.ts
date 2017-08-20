import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { AlbumType } from "../albums";
import { PostType } from "../posts";
import { getResourceByPath } from "../shared";
import { TodoType } from "../todos";

export function getUsers() {
    return getResourceByPath("/users");
}

export function getUser(id: number) {
    return getResourceByPath(`/users/${id}`);
}

export function getUserAlbums(id: number) {
    return getResourceByPath(`/users/${id}/albums`);
}

export function getUserPosts(id: number) {
    return getResourceByPath(`/users/${id}/posts`);
}

export function getUserTodos(id: number) {
    return getResourceByPath(`/users/${id}/todos`);
}

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

export const UserType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        address: { type: UserAddressType },
        albums: {
            resolve: (parentValue) => getUserAlbums(parentValue.id),
            type: new GraphQLList(AlbumType),
        },
        company: { type: UserCompanyType },
        email: { type: GraphQLString },
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        phone: { type: GraphQLString },
        posts: {
            resolve: (parentValue) => getUserPosts(parentValue.id),
            type: new GraphQLList(PostType),
        },
        todos: {
            resolve: (parentValue) => getUserTodos(parentValue.id),
            type: new GraphQLList(TodoType),
        },
        username: { type: GraphQLString },
        website: { type: GraphQLString },
    }),
    name: "User",
});
