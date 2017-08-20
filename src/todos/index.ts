import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

import { getResourceByPath } from "../shared";
import { getUser, UserType } from "../users";

export function getTodos() {
    return getResourceByPath("/todos");
}

export function getTodo(id: number) {
    return getResourceByPath(`/todos/${id}`);
}

export const TodoType = new GraphQLObjectType({
    fields: () => ({
        completed: { type: GraphQLBoolean },
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        user: {
            resolve: (parentValue) => getUser(parentValue.userId),
            type: UserType,
        },
    }),
    name: "Todo",
});
