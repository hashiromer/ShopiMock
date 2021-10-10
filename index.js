import { ApolloServer } from "apollo-server";
import { loadFile } from "graphql-import-files";
import { typeDefs, resolvers, mocks } from "graphql-scalars";
import faker from "faker";
const schema = loadFile("./schema.graphql");
import path from "path";
import fs from "fs";
const __dirname = path.resolve(path.dirname(""));

const testFolder = path.resolve(__dirname, "assets", "images");

let totalImages = 0;

const imageURLs = [];
fs.readdirSync(testFolder).forEach((file) => {
  totalImages += 1;
  imageURLs.push(path.join("assets", "images", file));
});

const mocks1 = {
  StorefrontID: () => "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMDc5Nzg1MTAw",
  JSON: () => faker.datatype.json(),
  HTML: () => "<p>Grey cotton knit sweater.</p>",
  FormattedString: () =>
    "Your current domain is <strong>johns-apparel.myshopify.com</strong>",
  Decimal: () => 22.8,
  ARN: () => "arn:partition:service:region:account-id:resource-id",
  UtcOffset: () => "-07:00",
  UnsignedInt64: () => faker.datatype.number(),
  ImageURL: () => imageURLs[faker.datatype.number(totalImages - 1)],
};

const server = new ApolloServer({
  typeDefs: [...typeDefs, schema],
  resolvers: {
    ...resolvers,
  },
  mocks: {
    ...mocks,
    ...mocks1,
  },
});

server.listen().then(({ url }) => {
  console.log(`
    🎈 Server is running at ${url}
  `);
});
