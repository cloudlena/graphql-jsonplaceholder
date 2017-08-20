import * as express from "express";
import * as graphqlHTTP from "express-graphql";

import { schema } from "./schema";

const DEFAULT_PORT = 3000;

const app = express();

const graphqlOptions: graphqlHTTP.Options = { schema };
if (process.env.NODE_ENV !== "production") {
    graphqlOptions.graphiql = true;
    graphqlOptions.pretty = true;
}

app.use("/graphql", graphqlHTTP(graphqlOptions));

const port = process.env.PORT || DEFAULT_PORT;
app.listen(port, () => console.log(`Server listening on port ${port}`));
