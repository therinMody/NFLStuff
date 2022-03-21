import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
    return (
        <HeaderBar>

            <h1>NFL Stuff</h1>

        </HeaderBar>
    );

};

export default Header;

/** Header styled components */
const HeaderBar = styled.div({
    backgroundColor: '#000000',
    color: '#707070',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: '200%',
    border: '2px solid',
    left: 0,
    right: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    height: 'auto',
});