import React from 'react';
import styled from 'styled-components';


//style
const Lplayer = styled.div`
    display: flex;
    justify-content: center;
`;
//○プレイヤーのデザイン
const PlayerMaru = styled.div`
    padding: 16px;
    border-bottom: ${props => props.active ? "solid 2px" : ""};
`;
const PlayerBatsu = styled.div`
    padding: 16px;
    border-bottom: ${props => props.active ? "solid 2px" : ""};
`;

function Player(props){
        
    const check = props.xIsNext
        return (
            <Lplayer>
                <PlayerMaru active={check}>○</PlayerMaru>
                <PlayerBatsu active={!check}>×</PlayerBatsu>
            </Lplayer>
        );
    };

export default Player;