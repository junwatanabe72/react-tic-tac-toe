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

function Cell(props) {
    const cell = (i) => <CellElement key={i} onClick={() => props.handleClick(i)}>{props.squares[i]}</CellElement>
    //cellを３つ生成する関数
    const createCell=(num)=>{  
        const cells = []
        const startNum = 3 * num
        for(let i=startNum;i<startNum+3;i++){
             cells[i]= cell(i)
            }
        return cells    
    }
    //trを３つ生成し、その内部でcellを３つ生成する関数
    const createTr=()=>{
        const Tr=[]
        for (let i=0;i<3;i++) {
            Tr[i] = <tr key={i}>{createCell(i)}</tr>
        }
        return Tr 
    }

    return(
        <tbody>
            {createTr()}
        </tbody> 
    )
}

export default Cell;