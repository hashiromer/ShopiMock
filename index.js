import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import cors from "cors";
import { typeDefs, resolvers } from "graphql-scalars";
import fs from "fs";
import mocks from "./mocks.js";
import dotenv from "dotenv";

dotenv.config();

const schema = fs.readFileSync("schema.graphql", "utf8");

const app = express();
app.use(express.static("assets"));
app.use(cors());

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: [...typeDefs, schema],
  resolvers: {
    ...resolvers,
  },
  mocks,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

server.applyMiddleware({ app });
await new Promise((resolve) =>
  httpServer.listen({ port: process.env.PORT }, resolve)
);
console.log(
  `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
);
