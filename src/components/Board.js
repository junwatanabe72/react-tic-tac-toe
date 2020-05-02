import React from 'react';
import Cells from './Cells';
import styled from 'styled-components';


//style
const Lboard = styled.div`
`;
const Blank = styled.div`
    padding: 20px;
`;
const Table = styled.table`
    border-collapse: collapse;
    margin: 0 auto;
`;

function Board (props) {
    const { squares, xIsNext, count, handleClick } =props
    return (
        <Blank>
            <Lboard>
                <Table>
                    <Cells squares={squares} xIsNext={xIsNext} count={count} handleClick={handleClick} />
                </Table>
            </Lboard>
        </Blank>
    );
};

export default Board;