import React, { Component } from 'react';

class Player extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const check = this.props.xIsNext
        let maruPlayer = <div className="player-maru player-common active">○</div>
        let batsuPlayer = <div className="player-batsu player-common">×</div>

        if (!check) {
            maruPlayer = <div className="player-maru player-common">○</div>
            batsuPlayer = <div className="player-batsu player-common active">×</div>
        }
        return (
            <div className="l-player">
                {maruPlayer}
                {batsuPlayer}
            </div>
        );
    };
}

export default Player;