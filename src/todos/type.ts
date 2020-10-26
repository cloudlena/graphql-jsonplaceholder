import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import UserType from "../users/type";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
    user: {
      resolve: (parentValue, args, { loaders }) =>
        loaders.user.load(parentValue.userId),
      type: UserType,
    },
  }),
});

export default TodoType;
