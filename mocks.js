import faker from "faker";
import fs from "fs";
import path from "path";
import { mocks } from "graphql-scalars";

const __dirname = path.resolve(path.dirname(""));
const rootPath = `http://:${process.env.PORT}`;

const imageFolder = path.resolve(__dirname, "assets", "images");

const imageURLs = [];
fs.readdirSync(imageFolder).forEach((file) => {
  const url = path.join(rootPath, "images", file);
  imageURLs.push(url);
});

const customMocks = {
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
  Address1: () => "3837 Hillcrest Lane",
  Address2: () => "Moreno Valley",
  City: () => "California ",
  Country: () => "USA",
  Company: () => "Yahoo",
  FirstName: () => "Jeffrey",
  FormatedName: () => "Jeffrey Blow",
  FormattedArea: () => "formattedArea",
  LastName: () => "Blow",
  FullName: () => "Jeffrey Blow",
  Province: () => "California",
  ProvinceCode: () => "90210",
  ZipCode: () => "23345",
};

export default {
  ...customMocks,
  ...mocks,
};
