import React from 'react';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import { QueryData, PlayerResult } from '../components';


//gql to retrive the list of teams
const GAMES = gql`
    query getGames($season: Int!) {
        getGames(season: $season) {
            Date
        }
    }
`;

const ParseDates = ({ season }) => {

    //set the date intitally
    const [date, setDate] = React.useState(season+"-09-09");

    const { loading, error, data } = useQuery(GAMES, {
        variables: { season: season }
    });

    function handleDateChange() {
        setDate(document.getElementById("dateSelection").value);
    };

    let dates = new Array();

    return (
        <>
            
            <QueryData loading={loading} error={error} data={data}>
                {data?.getGames?.map((game) => {
                    //store unique dates
                    if (game.Date != null) {
                        if (dates.includes((game.Date).substring(0, 10))) {
                            //do nothing, it is a duplicate
                        } else {
                            //API has some flaws, its not by date its by week, to some extent
                            // too late to turn around
                            let day = new Date(game.Date);
                            let dayInt = day.getDay();
                            if (dayInt === 4) {
                                dates.push((game.Date).substring(0, 10));
                            };
                        };
                    };
                })}
                
                <DropDown id="dateSelection" onChange={handleDateChange} value={date}>
                    {dates.map((date) => (
                        <option key={date} value={date}>{date}</option>
                    ))}
                </DropDown>

                <hr />

                <PlayerResult date={date} />
                
            </QueryData>
        </>
    );

};

export default ParseDates;

const DropDown = styled.select({
    fontSize: '100%',
    width: '25%',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    margin: '1%',
    padding: '1%',
});