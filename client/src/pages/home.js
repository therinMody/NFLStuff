import React from 'react';
import styled from '@emotion/styled';
import { Header, Teams, Menu } from '../components';

const Home = () => {
    return (

        <>
            <Header />
            <Left>
                <Menu />
            </Left>
            <Right>
                <Teams />
            </Right>
            
        </>

    );
};

export default Home;

const Left = styled.div({
    width: '30%',
});

const Right = styled.div({
    marginLeft: '30%',
});