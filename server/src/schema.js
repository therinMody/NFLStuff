const { gql } = require('apollo-server');

const typeDefs = gql`

type Query {

    "Query for retrieving all the teams in the NFL"
    getTeams:[Team!]!

    "Query for retrieiving all games in the NFL for a season"
    getGames(season: Int!): [Game!]!

    "Query for getting fantasy stats for a date in a NFL season"
    getFantasyStats(date: String!): [Player!]!

}

"A Team"
type Team {
    Key: String!
    City: String!
    Name: String!
    Division: String!
    Conference: String!
    WikipediaLogoUrl: String!
    PrimaryColor: String!
    SecondaryColor: String!
}

"A game in a specified season"
type Game {
    GameKey: String
    Week: Int!
    Date: String
    AwayTeam: String!
    HomeTeam: String!
}

type Player {
    PlayerID: Int!
    Team: String!
    Position: String!
    FantasyPoints: Float!
    Name: String!
}

`;

module.exports = typeDefs;