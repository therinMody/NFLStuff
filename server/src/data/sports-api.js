const { RESTDataSource } = require('apollo-datasource-rest');
require('dotenv').config();

class SportsAPI extends RESTDataSource {
    constructor() {
        super();
        //base url
        this.baseURL = 'https://api.sportsdata.io/v3/nfl/';
    }

    //returns a list of teams
    getTeams() {
        return this.get("stats/json/Teams?key="+process.env.REACT_APP_SPORTS_DATA_API_KEY);
    }

    //returns a list of all games
    getGames(season) {
        return this.get("scores/json/Schedules/"+season+"?key="+process.env.REACT_APP_SPORTS_DATA_API_KEY);
    }

    //returns a list of all fantasy players for this date
    getFantasyStats(date) {
        return this.get("stats/json/DailyFantasyPoints/"+date+"?key="+process.env.REACT_APP_SPORTS_DATA_API_KEY);
    }

}

module.exports = SportsAPI;