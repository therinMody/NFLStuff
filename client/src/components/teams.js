import React from 'react';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import { QueryData } from '../components';
import TeamCard from '../containers/team-card';

//gql to retrive the list of teams
const TEAMS = gql`
    query getTeams {
        getTeams {
            Key
            City
            Name
            Division
            Conference
            WikipediaLogoUrl
            PrimaryColor
            SecondaryColor
        }
    }
`;

const Teams = () => {

    const { loading, error, data } = useQuery(TEAMS);

    return (
        <SectionContainer>
            <QueryData loading={loading} error={error} data={data}>
                {data?.getTeams?.map((team) => (
                    <TeamCard key={team.Key} team={team} />
                ))}
            </QueryData>
        </SectionContainer>
    );

};

export default Teams;

const SectionContainer = styled.div({
    textAlign: 'center',
    marginTop: '160px',
});