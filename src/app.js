import express from "express";
import { ApolloServer } from "apollo-server-express";
import { bodyParserGraphQL } from "body-parser-graphql";
import compression from "compression";
import resolvers from "../src/graphql/resolvers";
import fs from "fs";

// Node file system을 사용하여 gql schema 가져옴
const typeDefs = fs.readFileSync("src/graphql/schema.graphql", {
  encoding: "utf-8",
});

const port = 8000;
const app = express();

app.use(bodyParserGraphQL());
app.use(compression());

// ApolloServer 생성
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // introspection: true, // 스키마 검사 활성화 default: true
  // playground: true, // playgorund 활성화 default: true
});

server.start().then(res => {
  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  app.listen(port, async () => {
    console.log("graphql api server open");
  });
})




/**
 * bodyParserGraphQL과 compression을 미들웨어로 추가하여 사용

bodyParserGraphQL : gql(쿼리)를 해석하기 위해 사용.

compression : gzip 압축을 사용하여 웹 앱의 속도를 높이기 위하여 사용.
 */