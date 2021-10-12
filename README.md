# ShopiMock
ShopiMock is a complete mock of Shopify Admin API which runs on a local web server to speed things up. 

## Installation


```bash
git clone https://github.com/hashiromer/ShopiMock.git
cd ShopiMock
npm install
npm run start

```

This should get the server up and running and the endpoint to be queried would be available at http://localhost:4000/graphql


## Usage

The endpoint can be queried programmatically from any application which can issue HTTP POST requests like curl or from javaScript. However it would
be more convenient to build queries first interactively using a dedicated Graphql IDE like Graphiql, Apollo Studio,Insomnia or GraphQL Playground etc. I have found Apollo Studio to be the most 

## Current Limitations

Since Shopify API is huge, the data is generated procedurally instead of manually creating it. It gives full coverage at the cost of semantic errors. So, sometimes the tool would generate data which would be syntactically valid from the perspective of Graphql Types and structure of query but it would not make sense semantically such as generating "Hello world" for a URL which was represented as string type in Graphql.



## License

[MIT](LICENSE.md)




