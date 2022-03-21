const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const SportsAPI = require('./data/sports-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            sportsAPI: new SportsAPI(),
        };
    },
});


server.listen().then(() => {
    console.log(
        `
        Server is alive and well
        Query at https://studio.apollographql.com/dev
        `
    );
});