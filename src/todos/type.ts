import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import UserType from "../users/type";

const TodoType = new GraphQLObjectType({
    fields: () => ({
        completed: { type: GraphQLBoolean },
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        user: {
            resolve: (parentValue, args, { loaders }) => loaders.user.load(parentValue.userId),
            type: UserType,
        },
    }),
    name: "Todo",
});

export default TodoType;
