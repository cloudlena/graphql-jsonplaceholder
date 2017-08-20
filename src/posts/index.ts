import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { CommentType } from "../comments";
import { getResourceByPath } from "../shared";
import { getUser, UserType } from "../users";

export function getPosts() {
    return getResourceByPath("/posts");
}

export function getPost(id: number) {
    return getResourceByPath(`/posts/${id}`);
}

export function getPostComments(id: number) {
    return getResourceByPath(`/posts/${id}/comments`);
}

export const PostType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        body: { type: GraphQLString },
        comments: {
            resolve: (parentValue) => getPostComments(parentValue.id),
            type: new GraphQLList(CommentType),
        },
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        user: {
            resolve: (parentValue) => getUser(parentValue.userId),
            type: UserType,
        },
    }),
    name: "Post",
});
