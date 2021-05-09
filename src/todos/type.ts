import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import UserType from "../users/type";
import { Loaders } from "../loaders";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
}

const TodoType: GraphQLObjectType<Todo, { loaders: Loaders }> =
  new GraphQLObjectType({
    name: "Todo",
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: GraphQLString },
      completed: { type: GraphQLBoolean },
      user: {
        type: UserType,
        resolve: (parentValue, args, { loaders }) =>
          loaders.user.load(parentValue.userId),
      },
    }),
  });

export default TodoType;
