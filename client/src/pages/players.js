import React from 'react';
import styled from '@emotion/styled';
import { Header, Menu, PlayersList} from '../components';

const Players = () => {
    return (
        <>
            <Header />
            <Left>
                <Menu />
            </Left>
            <Right>
                <PlayersList />
            </Right>
        </>
    );
};

export default Players;

const Left = styled.div({
    width: '30%',
});

const Right = styled.div({
    marginLeft: '30%',
});
