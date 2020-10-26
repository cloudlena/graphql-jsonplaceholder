import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import CommentType from "../comments/type";
import UserType from "../users/type";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    comments: {
      resolve: (parentValue, args, { loaders }) =>
        loaders.comments.load(parentValue.id),
      type: new GraphQLList(CommentType),
    },
    user: {
      resolve: (parentValue, args, { loaders }) =>
        loaders.user.load(parentValue.userId),
      type: UserType,
    },
  }),
});

export default PostType;
