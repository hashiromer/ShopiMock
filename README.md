# ShopiMock
ShopiMock is a complete mock of Shopify Admin API which runs on local webserver to speed things up. 

## Installation


```bash
git clone git clone https://github.com/hashiromer/ShopiMock.git
cd ShopiMock
npm install
npm run start

```

This should get the server up and running and the endpoint to be queried would be available at http://localhost:4000/graphql


## Usage

The endpoint`can be queried programatically from any application which can issue http post requests like curl or from javaScript. However it would
be more convenient to build queries first interactively using a dedicated Graphql IDE like Graphiql, Apollo Studio,Insomnia or GraphQL Playground etc.


## License

[MIT](LICENSE.md)



