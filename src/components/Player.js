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
    let maruPlayer = <PlayerMaru active>○</PlayerMaru>
    let batsuPlayer = <PlayerBatsu>×</PlayerBatsu>

        if (!check) {
            maruPlayer = <PlayerMaru>○</PlayerMaru>
            batsuPlayer = <PlayerBatsu active>×</PlayerBatsu>
        }
        return (
            <Lplayer>
                {maruPlayer}
                {batsuPlayer}
            </Lplayer>
        );
    };

// class Player extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const check = this.props.xIsNext
//         let maruPlayer = <div className="player-maru player-common active">○</div>
//         let batsuPlayer = <div className="player-batsu player-common">×</div>

//         if (!check) {
//             maruPlayer = <div className="player-maru player-common">○</div>
//             batsuPlayer = <div className="player-batsu player-common active">×</div>
//         }
//         return (
//             <div className="l-player">
//                 {maruPlayer}
//                 {batsuPlayer}
//             </div>
//         );
//     };
// }


export default Player;