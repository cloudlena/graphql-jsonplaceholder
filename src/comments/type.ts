import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import PostType from "../posts/type";

const CommentType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        body: { type: GraphQLString },
        email: { type: GraphQLString },
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        post: {
            resolve: (parentValue, args, { loaders }) => loaders.post.load(parentValue.postId),
            type: PostType,
        },
    }),
    name: "Comment",
});

export default CommentType;
