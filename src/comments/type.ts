import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import PostType from "../posts/type";

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
}

const CommentType: GraphQLObjectType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    body: { type: GraphQLString },
    post: {
      resolve: (parentValue, args, { loaders }) =>
        loaders.post.load(parentValue.postId),
      type: PostType,
    },
  }),
});

export default CommentType;
