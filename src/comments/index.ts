import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { getPost, PostType } from "../posts";
import { getResourceByPath } from "../shared";

export function getComments() {
    return getResourceByPath("/comments");
}

export function getComment(id: number) {
    return getResourceByPath(`/comments/${id}`);
}

export const CommentType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        body: { type: GraphQLString },
        email: { type: GraphQLString },
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        post: {
            resolve: (parentValue) => getPost(parentValue.postId),
            type: PostType,
        },
    }),
    name: "Comment",
});
