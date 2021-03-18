import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth";

import connectDB from "./config/db";

import { ApolloServer, gql } from "apollo-server-express";

import resolvers from "./graphql/resolvers";
import context from "./graphql/context";
import fs from "fs";
import path from "path";

const typeDefs = gql(
  fs.readFileSync(path.resolve(__dirname, "./graphql/schema.graphql"), {
    encoding: "utf-8",
  })
);

const server = new ApolloServer({ typeDefs, resolvers, context });

const app = express();
dotenv.config();
app.use(cors());
connectDB();

app.use("/auth", authRoutes);

server.applyMiddleware({ app, path: "/graphql" });

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}...`)
);
