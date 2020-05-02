import React from 'react';
import styled from 'styled-components';


//style
const Lresult = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;
const ResultMain = styled.div`
`; 
const condition = {
    playing: "processing",
    win: "win!",
    draw: "draw"
}
const activePlayer = {
    maru: '○',
    batsu: '×'
}

function Result(props) {
    let status;
    if(props.exceed){
            status = condition.playing
        if (props.count === 9){
            status = condition.draw
        }
    }else{
        if (props.xIsNext){
            status = activePlayer.batsu+condition.win
        }else{
            status = activePlayer.maru + condition.win
        } 
    }
    return (
        <Lresult>
            <ResultMain>
                {status}
            </ResultMain>
        </Lresult>
    );
};

export default Result;