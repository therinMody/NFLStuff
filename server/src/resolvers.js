const resolvers = {

    Query: {

        getTeams: (_,__, {dataSources}) => {
            return dataSources.sportsAPI.getTeams();
        },

        getGames: (_, {season}, {dataSources}) => {
            return dataSources.sportsAPI.getGames(season);
        },

        getFantasyStats: (_, {date}, {dataSources}) => {
            return dataSources.sportsAPI.getFantasyStats(date);
        }
        
    }

}

module.exports = resolvers;