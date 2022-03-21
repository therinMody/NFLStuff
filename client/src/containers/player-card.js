import React from 'react';
import styled from '@emotion/styled';


const PlayerCard = ({ player, rank, page }) => {

    return (
        <Content>
            <TableContainer>
                <tbody>
                    <tr>
                        <td width='10%'>
                            {rank + (page * 10) - 10}
                        </td>
                        <td width='30%'>
                            {player.Name}
                        </td>
                        <td width='15%'>
                            {player.Position}
                        </td>
                        <td width='15%'>
                            {player.Team}
                        </td>
                        <td width='30%'>
                            {player.FantasyPoints}
                        </td>
                    </tr>
                </tbody>
            </TableContainer>
        </Content>
    );

};

export default PlayerCard;

const TableContainer = styled.table({
    width: '100%',
    textAlign: 'right',
    padding: '1%'
});

const Content = styled.div({
    color: '#707070',
    border: '1px solid #707070',
    backgroundColor: '#000000',
});