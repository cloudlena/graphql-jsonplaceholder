import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import PostType from "../posts/type";
import { Loaders } from "../loaders";

export interface Comment {
  id: string;
  name: string;
  email: string;
  body: string;
  postId: string;
}

const CommentType: GraphQLObjectType<Comment, { loaders: Loaders }> =
  new GraphQLObjectType({
    name: "Comment",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      body: { type: GraphQLString },
      post: {
        type: PostType,
        resolve: (parentValue, args, { loaders }) =>
          loaders.post.load(parentValue.postId),
      },
    }),
  });

export default CommentType;
