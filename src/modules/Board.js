import React from 'react';
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
const Cell = styled.td`
    border: solid 2px black;
    width: 50px;
    height: 50px;
    cursor: pointer;
    text-align: center;
    font-size: 25px;    
`;


function Board (props) {
    const cell =(i)=> <Cell onClick={() => props.handleClick(i)}>{props.squares[i]}</Cell>
    const border = (
        <Table>
            <tbody>
                <tr>
                    {cell(0)}
                    {cell(1)}
                    {cell(2)}
                </tr>
                <tr>
                    {cell(3)}
                    {cell(4)}
                    {cell(5)}
                </tr>
                <tr>
                    {cell(6)}
                    {cell(7)}
                    {cell(8)}
                </tr>
            </tbody>
        </Table>
    );
    return (
        <Blank>
            <Lboard>
                {border}
            </Lboard>
        </Blank>
    );
};


// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const cell = (i) => <td className="cell" onClick={() => this.props.handleClick(i)}>{this.props.squares[i]}</td>
//         const border = (
//             <table>
//                 <tbody>
//                     <tr>
//                         {cell(0)}
//                         {cell(1)}
//                         {cell(2)}
//                     </tr>
//                     <tr>
//                         {cell(3)}
//                         {cell(4)}
//                         {cell(5)}
//                     </tr>
//                     <tr>
//                         {cell(6)}
//                         {cell(7)}
//                         {cell(8)}
//                     </tr>
//                 </tbody>
//             </table>
//         );
//         return (
//             <div className="blank">
//                 <div className="l-board">
//                     {border}
//                 </div>
//             </div>
//         );
//     };
// }

export default Board;