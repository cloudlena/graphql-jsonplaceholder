import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import CommentType from "../comments/type";
import UserType from "../users/type";

const PostType = new GraphQLObjectType({
    fields: () => ({
        body: { type: GraphQLString },
        comments: {
            resolve: (parentValue, args, { loaders }) => loaders.comments.load(parentValue.id),
            type: new GraphQLList(CommentType),
        },
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        user: {
            resolve: (parentValue, args, { loaders }) => loaders.user.load(parentValue.userId),
            type: UserType,
        },
    }),
    name: "Post",
});

export default PostType;
