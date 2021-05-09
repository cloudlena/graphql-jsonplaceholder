import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import CommentType from "../comments/type";
import UserType from "../users/type";
import { Loaders } from "../loaders";

export interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

const PostType: GraphQLObjectType<Post, { loaders: Loaders }> =
  new GraphQLObjectType({
    name: "Post",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLString },
      body: { type: GraphQLString },
      comments: {
        type: new GraphQLList(CommentType),
        resolve: (parentValue, args, { loaders }) =>
          loaders.comments.load(parentValue.id),
      },
      user: {
        type: UserType,
        resolve: (parentValue, args, { loaders }) =>
          loaders.user.load(parentValue.userId),
      },
    }),
  });

export default PostType;
