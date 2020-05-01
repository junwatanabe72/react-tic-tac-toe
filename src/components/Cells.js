import React from 'react';
import styled from 'styled-components';

const CellElement = styled.td`
    border: solid 2px black;
    width: 50px;
    height: 50px;
    cursor: pointer;
    text-align: center;
    font-size: 25px;    
`;

function Cells(props) {
    return(
        <tbody>
            {
                new Array(3).fill('').map((item, i)=>{
                        return(<tr>
                                    {
                                        new Array(3).fill('').map((_item, j) =>{
                                                const index= i * 3 +j
                                                return  <CellElement key={index} onClick={() => props.handleClick(index)}> {props.squares[index]}</CellElement>
                                        })
                                    }
                        </tr>)
                })
            }
        </tbody> 
    )
}

export default Cells;