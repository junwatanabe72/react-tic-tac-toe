import React from 'react';
import styled from 'styled-components';


//style
const Lresult = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;
const ResultMain = styled.div`
`; 

function Result(props) {
    const condition = {
        playing: "processing",
        win: "win!",
        draw: "draw"
    }
    const activePlayer = {
        maru: '○',
        batsu: '×'
    }

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


// class Result extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const condition = {
//             playing: "processing",
//             win: "win!",
//             draw: "draw"
//         }
//         const activePlayer = {
//             maru: '○',
//             batsu: '×'
//         }
//         let status;

//         if (this.props.exceed) {
//             status = condition.playing
//             if (this.props.count === 9) {
//                 status = condition.draw
//             }
//         } else {
//             if (this.props.xIsNext) {
//                 status = activePlayer.batsu + condition.win
//             } else {
//                 status = activePlayer.maru + condition.win
//             }
//         }

//         return (
//             <div className="l-result">
//                 <div className="result">
//                     {status}
//                 </div>
//             </div>
//         );
//     };
// }

export default Result;